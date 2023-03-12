import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/Post/post.service';
import { PostsComponent } from './posts.component';

describe('PostsComponent', () => {
  let POSTS: Post[];
  let mockPostService: PostService;
  let postsComponent: PostsComponent;

  beforeEach(() => {
    POSTS = [
      {
        id: 1,
        title: 'title 1',
        body: 'body 1',
      },
      {
        id: 2,
        title: 'title 2',
        body: 'body 2',
      },
      {
        id: 3,
        title: 'title 3',
        body: 'body 3',
      },
    ];

    mockPostService = jasmine.createSpyObj(['getPosts', 'deletePost']);
    postsComponent = new PostsComponent(mockPostService);
  });

  describe('delete method', () => {
    it('should delete the selected Post from POSTS', () => {
      let post = POSTS[1];
      postsComponent.deletePost(post);
      expect(postsComponent.posts.length).toBe(2);
    });
  });
});
