import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter component] Reset');
export const customCounterIncreament = createAction(
  'customincreamentcounter',
  props<{ value: number }>()
);
