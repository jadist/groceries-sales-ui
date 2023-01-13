import { Injectable } from '@angular/core';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class FirebaseAuthService {
  userData: unknown;

  constructor(
    public afAuth: AngularFireAuth // Inject Firebase auth service
  ) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    console.log('user', user);
    console.log('user.emailVerified', user?.emailVerified);
    return user !== null;
  }

  SignUp(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  // Sign in with email/password
  SignIn(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  ResetPassword(email: string) {
    return sendPasswordResetEmail(getAuth(), email);
  }

  SignOut() {
    return this.afAuth.signOut();
  }
}
