import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/model/posts.model';

const ADD_POST_ACTION = '[posts page] add post';
const UPDATE_POST_ACTION = '[pots page] update post';
const DELETE_POST_ACTION = '[post page] delete post';
export const addAction = createAction(
  ADD_POST_ACTION,
  props<{ posts: Post }>()
);

export const updateAction = createAction(
  UPDATE_POST_ACTION,
  props<{ post: Post }>()
);

export const deleteAction = createAction(
  DELETE_POST_ACTION,
  props<{ id: number }>()
);
