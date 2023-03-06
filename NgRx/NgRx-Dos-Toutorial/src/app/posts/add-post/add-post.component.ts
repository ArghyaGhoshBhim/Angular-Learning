import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/model/posts.model';
import { AppState } from 'src/app/store/app.state';
import { addAction } from '../state/posts.actions';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  postForm!: FormGroup;
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  addPost() {
    if (!this.postForm.valid) {
      return;
    }

    let postData: Post = {
      title: this.postForm.value.title,
      description: this.postForm.value.description,
    };
    this.store.dispatch(addAction({ posts: postData }));
    console.log(this.postForm);
  }

  titleShowErrorMessage(): any {
    const titleInput = this.postForm.get('title');

    if (titleInput != null) {
      if (titleInput.touched && !titleInput.valid) {
        if (titleInput.errors != null && titleInput.errors['required']) {
          return 'The title is required';
        }
      }
      if (titleInput.errors != null && titleInput.errors['minlength'] != null) {
        return 'min length should be 4';
      }
    }
  }
  descriptionShowErrorMessage(): any {
    const descriptionInput = this.postForm.get('description');

    if (descriptionInput != null) {
      if (descriptionInput.touched && !descriptionInput.valid) {
        if (
          descriptionInput.errors != null &&
          descriptionInput.errors['required']
        ) {
          return 'The description is required';
        }
      }
      if (
        descriptionInput.errors != null &&
        descriptionInput.errors['minlength'] != null
      ) {
        return 'min length should be 8';
      }
    }
  }
}
