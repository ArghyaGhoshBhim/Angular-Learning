import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/model/posts.model';
import { AppState } from 'src/app/store/app.state';
import { getPostById } from '../state/posts.selector';

@Component({
  selector: 'app-edit-posts',
  templateUrl: './edit-posts.component.html',
  styleUrls: ['./edit-posts.component.css'],
})
export class EditPostsComponent implements OnInit {
  updateForm!: FormGroup;
  post: Post | undefined;
  constructor(private router: ActivatedRoute, private store: Store<AppState>) {}
  ngOnInit(): void {
    this.router.paramMap.subscribe((data) => {
      console.log(data);
      const id = Number.parseInt(data.get('id') + '');
      this.store.select(getPostById, { id }).subscribe((data) => {
        console.log(data);
        this.post = data;
        this.createFromGroup();
      });
    });
  }

  updatePost() {}

  createFromGroup() {
    this.updateForm = new FormGroup({
      title: new FormControl(this.post?.title, [
        Validators.required,
        Validators.minLength(5),
      ]),
      description: new FormControl(this.post?.description, [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }
  titleShowErrorMessage(): any {
    const titleInput = this.updateForm.get('title');

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
    const descriptionInput = this.updateForm.get('description');

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
