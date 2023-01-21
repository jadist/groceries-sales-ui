import { Component } from '@angular/core';
import { ButtonClickModel, ComponentEntryInputModel } from 'src/app/components/main/entry/entry.model';

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

  onButtonClickSignUp(value: ButtonClickModel) {
    // this.authService
    //   .SignUp(value.Email!, value.Password)
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }
}
