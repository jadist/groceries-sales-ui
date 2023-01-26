import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../services/guard/guard.guard';

import { RoutingEnum } from '../../app/models/routing.enum';

import { LoginComponent } from '../../app/pages/login/login.component';
import { RegisterComponent } from '../../app/pages/register/register.component';
import { ForgotPasswordComponent } from '../../app/pages/forgot-password/forgot-password.component';
import { HomeComponent } from '../pages/home/home.component';

import { UserRoleComponent } from '../pages/user/user-role/user-role.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: RoutingEnum.Login,
    pathMatch: 'full',
  },

  {
    path: RoutingEnum.Home,
    component: HomeComponent,
    canActivate: [AuthGuard],
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
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
