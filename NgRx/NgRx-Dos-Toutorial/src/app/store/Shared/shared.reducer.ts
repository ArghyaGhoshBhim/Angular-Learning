import { createReducer, on } from '@ngrx/store';
import { setErrorAction, setLoadingSpinnerAction } from './shared.action';
import { initialState } from './shared.state';

export const sharedReducer = createReducer(
  initialState,
  on(setLoadingSpinnerAction, (state, action) => {
    return {
      ...state,
      showLoading: action.status,
    };
  }),
  on(setErrorAction, (state, action) => {
    return {
      ...state,
      errorMessage: action.message,
    };
  })
);
