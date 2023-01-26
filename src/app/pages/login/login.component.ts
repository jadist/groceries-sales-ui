import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { RoutingEnum } from '../../models/routing.enum';

import {
  ButtonClickModel,
  ComponentEntryInputModel,
} from 'src/app/components/main/entry/entry.model';
import { FirebaseAuthService } from 'src/app/services/firebase/auth/firebase-auth.service';

import { SidebarService } from 'src/app/services/layout/sidebar/sidebar.service';

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
    private router: Router,
    private sidebar: SidebarService
  ) {
    this.sidebar.setHideSidebarLayout(true);
  }

  onButtonClickLogin(value: ButtonClickModel) {
    this.authService
      .SignIn(value.Email!, value.Password)
      .then((result) => {
        console.log(result);

        this.sidebar.setHideSidebarLayout(false);

        this.router.navigate([RoutingEnum.Home]);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
