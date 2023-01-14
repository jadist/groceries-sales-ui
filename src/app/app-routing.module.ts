import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../app/services/guard/auth.guard';

import { LoginComponent } from '../app/routed-pages/login/login.component';
import { RegisterComponent } from '../app/routed-pages/register/register.component';
import { ForgotPasswordComponent } from '../app/routed-pages/forgot-password/forgot-password.component';

import { UserRoleComponent } from '../app/routed-pages/user/user-role/user-role.component';
import { RoutingEnum } from '../app/models/routing.enum';

const routes: Routes = [
  {
    path: '',
    redirectTo: RoutingEnum.Login,
    pathMatch: 'full',
  },
  {
    path: RoutingEnum.Login,
    component: LoginComponent,
  },
  {
    path: RoutingEnum.Register,
    component: RegisterComponent,
  },
  {
    path: RoutingEnum.ForgotPassword,
    component: ForgotPasswordComponent,
  },

  {
    path: RoutingEnum.UserRole,
    component: UserRoleComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
