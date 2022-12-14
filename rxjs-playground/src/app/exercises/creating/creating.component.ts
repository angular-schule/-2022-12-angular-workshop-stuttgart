import { Component } from '@angular/core';
import { Observable, of, from, timer, interval, ReplaySubject, map, filter } from 'rxjs';

@Component({
  selector: 'rxw-creating',
  templateUrl: './creating.component.html',
})
export class CreatingComponent {

  logStream$ = new ReplaySubject<string | number>();

  constructor() {
    /**
     * 1. Erstelle ein Observable und abonniere den Datenstrom.
     *    Probiere dazu die verschiedenen Creation Functions aus: of(), from(), timer(), interval()
     * 2. Implementiere außerdem ein Observable manuell, indem du den Konstruktor "new Observable()" nutzt.
     *
     * Tipps:
     * Zum Abonnieren kannst du einen (partiellen) Observer oder ein einzelnes next-Callback verwenden.
     * Du kannst die Methode this.log() verwenden, um eine Ausgabe in der schwarzen Box im Browser zu erzeugen.
     */

    /******************************/

    const obverver = {
      next: (e: string) => this.log(e),
      error: (err: any) => this.log('ERROR'),
      complete: () => this.log('COMPLETE')
    }

    // const observable = of('😎', '🥹', '🤪', '🤨');

    const observable = new Observable<string>((subscriber) => {

      subscriber.next('😎');
      const x = setTimeout(() => subscriber.next('😍'), 1000);
      const y = setTimeout(() => subscriber.complete(), 2000)
      // subscriber.next('😍');

      return () => {
        this.log('Cleanup!')
        clearTimeout(x);
        clearTimeout(y);
      }
    });

    const subscription = observable.subscribe(obverver);
    setTimeout(() => subscription.unsubscribe(), 500);


    /******************************/
  }

  private log(msg: string | number) {
    this.logStream$.next(msg);
  }

}
