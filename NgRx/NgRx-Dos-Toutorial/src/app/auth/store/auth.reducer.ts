import { createReducer, on } from '@ngrx/store';
import { loginSuccess } from './auth.action';
import { initialState } from './auth.state';

export const authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, action) => {
    console.log('auth.reducer.ts authReducer', action);

    return {
      ...state,
      user: action.user,
    };
  })
);
