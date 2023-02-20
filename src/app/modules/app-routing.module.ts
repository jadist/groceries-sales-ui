import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../services/guard/guard.guard';

import { RoutingEnum } from './models/routing.enum';

import { LoginComponent } from '../../app/pages/login/login.component';
import { RegisterComponent } from '../../app/pages/register/register.component';
import { ForgotPasswordComponent } from '../../app/pages/forgot-password/forgot-password.component';
import { HomeComponent } from '../pages/home/home.component';

import { PagesRootComponent } from '../pages/pages-root/pages-root.component';

import { UserRoleComponent } from '../pages/user/user-role/user-role.component';
import { UserListComponent } from '../pages/user/user-list/user-list.component';
import { AccessObjectComponent } from '../pages/user/access-object/access-object.component';
import { RoleAccessMapComponent } from '../pages/user/role-access-map/role-access-map.component';

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
    path: '',
    component: PagesRootComponent,
    children: [
      {
        path: RoutingEnum.AccessObject,
        component: AccessObjectComponent,
        canActivate: [AuthGuard],
      },
      {
        path: RoutingEnum.RoleAccessMap,
        component: RoleAccessMapComponent,
        canActivate: [AuthGuard],
      },
      {
        path: RoutingEnum.UserRole,
        component: UserRoleComponent,
        canActivate: [AuthGuard],
      },
      {
        path: RoutingEnum.UserList,
        component: UserListComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
