import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {
  ButtonClickModel,
  ComponentEntryInputModel,
} from 'src/app/components/main/entry/entry.model';
import { FirebaseAuthService } from 'src/app/services/firebase-auth/firebase-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  LoginComponentConfig: ComponentEntryInputModel = {
    Title: 'Welcome to Jadist!',
    SubTitle: 'Log in to your account',
    UsePassword: true,
    UseRememberMe: true,
    ButtonText: 'Sign In',
    Help: {
      ForgotPassword: true,
      SignIn: false,
      SignUp: true,
    },
  };

  constructor(
    private authService: FirebaseAuthService,
    private router: Router
  ) {}

  onButtonClickLogin(value: ButtonClickModel) {
    this.authService
      .SignIn(value.Email!, value.Password)
      .then((result) => {
        console.log(result);
        // this.router.navigate(['user-role']);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
