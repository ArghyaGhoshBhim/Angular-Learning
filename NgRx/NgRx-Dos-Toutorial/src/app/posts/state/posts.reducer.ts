import { createReducer, on } from '@ngrx/store';
import { addAction } from './posts.actions';
import { initialState } from './posts.state';

export const postReducer = createReducer(
  initialState,
  on(addAction, (state, action) => {
    console.log('posts.reducer.ts: ', action);
    let postdata = { ...action.posts };
    postdata.id = state.posts.length + 1;
    return {
      ...state,
      posts: [...state.posts, postdata],
    };
  })
);
