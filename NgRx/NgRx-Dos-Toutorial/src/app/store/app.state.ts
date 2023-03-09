import { countReducer } from '../counter/reducer/counter.reducer';
import { CounterState } from '../counter/state/Counter.state';
import { postReducer } from '../posts/state/posts.reducer';
import { PostsState } from '../posts/state/posts.state';
import { sharedReducer } from './Shared/shared.reducer';
import { SHARED_STATE_NAME } from './Shared/shared.selector';
import { SharedState } from './Shared/shared.state';

/** 
export interface AppState {
  counter: CounterState;
  posts: PostsState;
}

export const appReducer = {
  count: countReducer,
  posts: postReducer,
};
*/

export interface AppState {
  [SHARED_STATE_NAME]: SharedState;
}

export const appReducer = {
  [SHARED_STATE_NAME]: sharedReducer,
};
