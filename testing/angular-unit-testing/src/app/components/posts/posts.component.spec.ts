import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PostService } from 'src/app/services/Post/post.service';
import { PostsComponent } from './posts.component';

describe('PostsComponent', () => {
  let POSTS: any;
  let mockPostService: any;
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
    /*
    mockPostService = jasmine.createSpyObj('PostService', [
      'getPosts',
      'deletePost',
    ]);
   postsComponent = new PostsComponent(mockPostService);
   */

    //********************************************Using testbed *********************/
    mockPostService = jasmine.createSpyObj('PostService', [
      'getPosts',
      'deletePost',
    ]);

    TestBed.configureTestingModule({
      providers: [
        PostsComponent,
        { provide: PostService, useValue: mockPostService },
      ],
    });

    postsComponent = TestBed.inject(PostsComponent);
  });

  describe('delete', () => {
    beforeEach(() => {
      mockPostService.deletePost.and.returnValue(of(true));
      postsComponent.posts = POSTS;
    });
    it('should delete the selected Post from POSTS', () => {
      postsComponent.deletePost(POSTS[1]);
      expect(postsComponent.posts.length).toBe(2);
    });
    it('should call the delete method in Post Service only once', () => {
      postsComponent.deletePost(POSTS[1]);
      expect(mockPostService.deletePost).toHaveBeenCalledTimes(1);
    });
    it('should delete the actual Post from posts', () => {
      postsComponent.deletePost(POSTS[1]);
      for (let post in postsComponent.posts) {
        expect(post).not.toEqual(POSTS[1]);
      }
    });
  });
});
