import { Component } from '@angular/core';
import {
  ButtonClickModel,
  ComponentEntryInputModel,
} from 'src/app/components/main/entry/entry.model';

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

  onButtonClickResetPassword(value: ButtonClickModel) {
    // this.authService
    //   .ResetPassword(value.Email!)
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }
}
