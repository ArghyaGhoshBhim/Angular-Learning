import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { getCounter } from '../state/counter.selectors';
import { CounterState } from '../state/Counter.state';

@Component({
  selector: 'app-view-count',
  templateUrl: './view-count.component.html',
})
export class ViewCountComponent implements OnInit {
  countValue!: number;

  //111
  //count$: Observable<{ counter: number }>;
  //110
  /*constructor(private store: Store<{ count: CounterState }>) {
    //111
    //this.count$ = store.select('count');
  }*/
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    //111
    /**
     this.count$.subscribe((data) => {
      console.log('Counter in view-count also called');
      this.countValue = data.counter;
    });
     */
    this.store.select(getCounter).subscribe((data) => {
      console.log('Counter in view-count also called: ', data);
      this.countValue = data;
    });
  }
}
