import { createAction, props } from '@ngrx/store';

const SET_LOADING_ACTION = '[shared action] shared action page';
export const setLoadingSpinnerAction = createAction(
  SET_LOADING_ACTION,
  props<{ status: boolean }>()
);
