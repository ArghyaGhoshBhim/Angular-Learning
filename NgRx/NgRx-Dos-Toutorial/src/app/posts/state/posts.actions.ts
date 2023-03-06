import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/model/posts.model';

const ADD_POST_ACTION = '[post page] add post';
export const addAction = createAction(
  ADD_POST_ACTION,
  props<{ posts: Post }>()
);
