import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  ButtonClickModel,
  ComponentEntryInputModel,
} from 'src/app/components/main/entry/entry.model';
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

  constructor(
    private authService: FirebaseAuthService,
    private router: Router
  ) {}

  onButtonClickResetPassword(value: ButtonClickModel) {
    this.authService
      .ResetPassword(value.Email!)
      .then((result) => {
        console.log(result);
        this.router.navigate(['/']);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
