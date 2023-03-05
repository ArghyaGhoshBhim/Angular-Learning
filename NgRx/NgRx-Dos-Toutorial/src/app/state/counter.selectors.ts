import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState } from './Counter.state';

const getCounterState = createFeatureSelector<CounterState>('count');

export const getCounter = createSelector(getCounterState, (state) => {
  return state.counter;
});

export const getChannelName = createSelector(getCounterState, (state) => {
  return state.channelName;
});
