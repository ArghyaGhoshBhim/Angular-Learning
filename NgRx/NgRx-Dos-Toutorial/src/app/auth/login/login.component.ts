import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { loginStartAction } from '../store/auth.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private stotre: Store<AppState>) {}
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  onSubmitLogin() {
    if (!this.loginForm.valid) {
      return;
    }
    console.log(this.loginForm);
    const email = this.loginForm.value.userName;
    const password = this.loginForm.value.password;
    console.log(email, password);
    this.stotre.dispatch(loginStartAction({ email, password }));
    this.loginForm.reset();
  }
}
