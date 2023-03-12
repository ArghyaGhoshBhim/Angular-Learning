import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from 'src/app/models/Post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  posts: Post[] = [];
  constructor(private client: HttpClient) {}
  getPosts() {
    return this.client.get<Post[]>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }
  deletePost(post: Post) {
    return this.client.delete(
      'https://jsonplaceholder.typicode.com/post/' + post.id
    );
  }
}
