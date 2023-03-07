import { createAction, props } from '@ngrx/store';

const LOGIN_START = '[auth page] login start';
const LOGIN_SUCCESS = '[auth page] login success';
const LOGIN_FAIL = '[auth page] login fail';

export const loginStartAction = createAction(
  LOGIN_START,
  props<{ email: string; password: string }>()
);
