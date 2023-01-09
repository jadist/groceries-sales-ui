import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../app/components/login/login.component';
import { RegisterComponent } from '../app/components/register/register.component';
import { QuotationComponent } from '../app/components/quotation/quotation.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'urlParam/:id', component: LoginComponent },

  { path: 'register', component: RegisterComponent },

  { path: 'quotation', component: QuotationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
