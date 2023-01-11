import { Component } from '@angular/core';

import {
  ComponentEntryInputModel,
  ButtonClickModel,
} from '../../components/main/entry/entry.model';

import { FirebaseAuthService } from '../../services/firebase-auth/firebase-auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent {
  ForgotPasswordComponentConfig: ComponentEntryInputModel = {
    Title: 'Password Recovery',
    SubTitle: '',
    UsePassword: false,
    UseRememberMe: false,
    ButtonText: 'Send Email',
    Help: {
      ForgotPassword: false,
      SignIn: true,
      SignUp: false,
    },
  };

  constructor(public authService: FirebaseAuthService) {}

  onButtonClickResetPassword(value: ButtonClickModel) {
    this.authService
      .ResetPassword(value.Email!)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
