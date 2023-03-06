import { Post } from 'src/app/model/posts.model';

export interface PostsState {
  posts: Post[];
}

export const initialState: PostsState = {
  posts: [
    { id: 1, title: 'abc', description: 'sgdys sdgsd sdghguirtj rtior lllll' },
    {
      id: 2,
      title: 'abcddd',
      description: 'sgdys sdgsd sdghguirtj rtior lllll',
    },
  ],
};
