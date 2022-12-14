import { Component, OnDestroy } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, Observable, share, takeUntil, shareReplay } from 'rxjs';

import { MeasureValuesService } from './measure-values.service';
import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'rxw-multicast',
  templateUrl: './multicast.component.html',
})
export class MulticastComponent implements OnDestroy {

  listeners: string[] = [];
  logStream$ = new ReplaySubject<string>();
  private destroy$ = new Subject<void>();

  measureValues$: Subject<number>;

  constructor(private mvs: MeasureValuesService, private es: ExerciseService) {
    /**************!!**************/

    // 1. unchanged stream
    // this.measureValues$ = this.mvs.getValues();

    // 2. multicast with share --> Subject
    // this.measureValues$ = this.mvs.getValues().pipe(share());

    // 3. multicast with shareReplay --> ReplaySubject
    // this.measureValues$ = this.mvs.getValues().pipe(shareReplay(1));

    // 4. please try out
    this.measureValues$ = new ReplaySubject<number>(1);
    this.mvs.getValues().subscribe(this.measureValues$);

    /**************!!**************/

  }

  addListener() {
    this.listeners.push(this.es.generateRandomString());
  }

  addConsoleListener() {
    const randomString = this.es.generateRandomString();
    this.measureValues$.pipe(takeUntil(this.destroy$)).subscribe(e => this.logStream$.next(`${randomString} ${e}`));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

}
