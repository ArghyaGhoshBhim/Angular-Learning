import { Component, OnInit } from '@angular/core';
import { UntypedFormArray } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CounterState } from '../Counter.state';

@Component({
  selector: 'app-view-count',
  templateUrl: './view-count.component.html',
})
export class ViewCountComponent {
  count$: Observable<{ counter: number }>;
  constructor(private store: Store<{ count: CounterState }>) {
    this.count$ = store.select('count');
  }
}
