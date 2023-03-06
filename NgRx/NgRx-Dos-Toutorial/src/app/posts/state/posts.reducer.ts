import { createReducer, on } from '@ngrx/store';
import { addAction, deleteAction, updateAction } from './posts.actions';
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
  }),
  on(updateAction, (state, action) => {
    let updatePosts = state.posts.map((post) => {
      return action.post.id == post.id ? action.post : post;
    });
    return {
      ...state,
      posts: updatePosts,
    };
  }),
  on(deleteAction, (state, action) => {
    let newPosts = state.posts.filter((post) => {
      return action.id !== post.id;
    });
    console.log('posts.reducer.ts: ', state);

    return {
      ...state,
      posts: newPosts,
    };
  })
);
