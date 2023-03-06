import { countReducer } from '../counter/reducer/counter.reducer';
import { CounterState } from '../counter/state/Counter.state';
import { postReducer } from '../posts/state/posts.reducer';
import { PostsState } from '../posts/state/posts.state';

export interface AppState {
  counter: CounterState;
  posts: PostsState;
}

export const appReducer = {
  count: countReducer,
  posts: postReducer,
};
