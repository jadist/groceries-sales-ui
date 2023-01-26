import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  ButtonClickModel,
  ComponentEntryInputModel,
} from 'src/app/components/main/entry/entry.model';
import { FirebaseAuthService } from '../../services/firebase/auth/firebase-auth.service';

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

  constructor(
    private authService: FirebaseAuthService,
    private router: Router
  ) {}

  onButtonClickSignUp(value: ButtonClickModel) {
    this.authService
      .SignUp(value.Email!, value.Password)
      .then((result) => {
        console.log(result);
        this.router.navigate(['/']);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
