import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  postForm!: FormGroup;
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
