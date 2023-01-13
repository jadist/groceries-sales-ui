import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  ComponentEntryInputModel,
  ButtonClickModel,
} from '../../components/main/entry/entry.model';

import { FirebaseAuthService } from '../../services/firebase-auth/firebase-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
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
    public authService: FirebaseAuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.SignOut().then((result) => {
      console.log('User Signed Out');
    });
  }

  onButtonClickLogin(value: ButtonClickModel) {
    this.authService
      .SignIn(value.Email!, value.Password)
      .then((result) => {
        console.log(result);
        this.router.navigate(['user-role']);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
