import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material.module';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './modules/app-routing.module';

import { LoginComponent } from './pages/login/login.component';
import { EntryComponent } from './components/main/entry/entry.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProductComponent } from './pages/sales/master/product/product.component';
import { PurchaseOrderComponent } from './pages/sales/transaction/purchase-order/purchase-order.component';
import { QuotationComponent } from './pages/sales/transaction/quotation/quotation.component';
import { TopbarComponent } from './components/main/topbar/topbar.component';
import { SidebarComponent } from './components/main/sidebar/sidebar.component';
import { AsTableComponent } from './components/content/as-table/as-table.component';
import { AsDetailComponent } from './components/content/as-detail/as-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    LoginComponent,
    ForgotPasswordComponent,
    RegisterComponent,
    ProductComponent,
    PurchaseOrderComponent,
    QuotationComponent,
    TopbarComponent,
    SidebarComponent,
    AsTableComponent,
    AsDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,

    FormsModule,
    ReactiveFormsModule,

    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
