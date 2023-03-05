import { createReducer, on } from '@ngrx/store';
import {
  changeChannelName,
  customCounterIncreament,
  decrement,
  increment,
  reset,
} from '../actions/counter.actions';
import { initialState } from '../state/Counter.state';

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
  }),
  on(customCounterIncreament, (state, action) => {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  }),
  on(changeChannelName, (state) => {
    return {
      ...state,
      channelName: 'updated channel name',
    };
  })
);
