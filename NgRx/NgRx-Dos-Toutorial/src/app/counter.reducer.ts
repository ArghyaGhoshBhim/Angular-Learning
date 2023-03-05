import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from './counter.actions';
import { initialState } from './Counter.state';

export const countReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  })
);
