import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PostService } from './post.service';

describe('Post service', () => {
  let postService: PostService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let POSTS = [
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
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    postService = new PostService(httpClientSpy);
  });
  describe('getPost()', () => {
    it('should get expected posts when the getposts is called', (done: DoneFn) => {
      httpClientSpy.get.and.returnValue(of(POSTS));
      postService.getPosts().subscribe({
        next: (posts) => {
          expect(posts).toEqual(POSTS);
          done();
        },
        error: () => {
          done.fail;
        },
      });
      expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
    });
  });
});

describe('Post service using TestBed', () => {
  let postService: PostService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let POSTS = [
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
  beforeEach(() => {
    let httpClientSpyObj = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      providers: [
        PostService,
        {
          provide: HttpClient,
          useValue: httpClientSpyObj,
        },
      ],
    });
    postService = TestBed.inject(PostService);
    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });
  describe('getPost()', () => {
    it('should get expected posts when the getposts is called', (done: DoneFn) => {
      httpClientSpy.get.and.returnValue(of(POSTS));
      postService.getPosts().subscribe({
        next: (posts) => {
          expect(posts).toEqual(POSTS);
          done();
        },
        error: () => {
          done.fail;
        },
      });
      expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
    });
  });
});
