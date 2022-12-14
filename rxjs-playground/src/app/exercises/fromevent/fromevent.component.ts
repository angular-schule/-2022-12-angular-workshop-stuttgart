import { Component } from '@angular/core';
import { fromEvent, map, startWith, debounceTime } from 'rxjs';

@Component({
  selector: 'rxw-fromevent',
  templateUrl: './fromevent.component.html',
})
export class FromeventComponent {

  currentWidth?: number;

  constructor() {
    /**
     * Schreibe die jeweils aktuelle Fensterbreite in das Property `this.currentWidth`
     *
     * Nutze fromEvent, um das resize-Event auf window zu abonnieren.
     * Initialisiere das Observable mit der aktuellen Fensterbreite (`window.innerWidth`)
     * Entprelle den Eventstrom, damit nicht zu viele Events gefeuert werden.
     */

    /******************************/

    fromEvent(window, 'resize').pipe(
      // pure! =)
      map((e: Event) => (e.target as Window).innerWidth),
      // impure :-(
      // map(() => window.innerWidth)
      debounceTime(2000),
      startWith(window.innerWidth),
      // debounceTime(2000),
      // startWith(999),

    )
    .subscribe(width => this.currentWidth = width)

    /******************************/
  }

}
