import { createAction, props } from '@ngrx/store';

const SET_LOADING_ACTION = '[shared action] shared loading page';
const SET_ERROR_MESSAGE = '[shared action] shared error page';
export const setLoadingSpinnerAction = createAction(
  SET_LOADING_ACTION,
  props<{ status: boolean }>()
);

export const setErrorAction = createAction(
  SET_ERROR_MESSAGE,
  props<{ message: string }>()
);
