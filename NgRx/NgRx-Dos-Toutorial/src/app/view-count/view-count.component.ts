import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CounterState } from '../Counter.state';

@Component({
  selector: 'app-view-count',
  templateUrl: './view-count.component.html',
})
export class ViewCountComponent implements OnInit {
  countValue!: number;
  count$: Observable<{ counter: number }>;
  constructor(private store: Store<{ count: CounterState }>) {
    this.count$ = store.select('count');
  }
  ngOnInit(): void {
    this.count$.subscribe((data) => {
      console.log('Counter in view-count also called');
      this.countValue = data.counter;
    });
  }
}
