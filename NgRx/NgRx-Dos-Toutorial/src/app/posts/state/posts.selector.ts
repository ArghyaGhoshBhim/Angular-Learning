import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Post } from 'src/app/model/posts.model';
import { PostsState } from './posts.state';

const getPostState = createFeatureSelector<PostsState>('posts');

export const getPosts = createSelector(getPostState, (state) => {
  return state.posts;
});
export const getPostById = createSelector(
  getPostState,
  (state: PostsState, props: any) => {
    return state.posts.find((post: Post) => {
      return post.id === props.id;
    });
  }
);
