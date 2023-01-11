import { Component } from '@angular/core';

import {
  ComponentEntryInputModel,
  ButtonClickModel,
} from '../../components/main/entry/entry.model';

import { FirebaseAuthService } from '../../services/firebase-auth/firebase-auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  RegisterComponentConfig: ComponentEntryInputModel = {
    Title: 'Register your account!',
    SubTitle: '',
    UsePassword: true,
    UseRememberMe: false,
    ButtonText: 'Sign Up',
    Help: {
      ForgotPassword: false,
      SignIn: true,
      SignUp: false,
    },
  };

  constructor(public authService: FirebaseAuthService) {}

  onButtonClickSignUp(value: ButtonClickModel) {
    this.authService
      .SignUp(value.Email!, value.Password)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
