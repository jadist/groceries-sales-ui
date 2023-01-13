import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../app/routed-pages/login/login.component';
import { RegisterComponent } from '../app/routed-pages/register/register.component';
import { ForgotPasswordComponent } from '../app/routed-pages/forgot-password/forgot-password.component';

import { UserRoleComponent } from '../app/routed-pages/user/user-role/user-role.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },

  {
    path: 'user-role',
    component: UserRoleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
