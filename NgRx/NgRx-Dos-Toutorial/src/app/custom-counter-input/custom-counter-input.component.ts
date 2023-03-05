import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { customCounterIncreament } from '../counter.actions';
import { CounterState } from '../Counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
})
export class CustomCounterInputComponent {
  value!: number;

  constructor(private store: Store<{ count: CounterState }>) {}
  addCount() {
    this.store.dispatch(customCounterIncreament({ value: this.value }));
  }
}
