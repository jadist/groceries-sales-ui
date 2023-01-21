import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoutingEnum } from '../../app/models/routing.enum';

import { LoginComponent } from '../../app/pages/login/login.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
