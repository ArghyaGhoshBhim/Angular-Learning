import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/model/posts.model';
import { AppState } from 'src/app/store/app.state';
import { deleteAction } from '../state/posts.actions';
import { getPosts } from '../state/posts.selector';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  posts$!: Observable<Post[]>;
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.posts$ = this.store.select(getPosts);
  }

  deletePost(postId: number | undefined) {
    if (postId != undefined) this.store.dispatch(deleteAction({ id: postId }));
  }
}
