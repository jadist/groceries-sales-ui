export interface ComponentEntryInputModel {
  Title: string;
  SubTitle: string;
  UsePassword: boolean;
  UseRememberMe: boolean;
  ButtonText: string;
  Help: {
    ForgotPassword: boolean;
    SignUp: boolean;
    SignIn: boolean;
  };
}
