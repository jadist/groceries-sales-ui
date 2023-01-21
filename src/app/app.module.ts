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

@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    LoginComponent,
    ForgotPasswordComponent,
    RegisterComponent,
    ProductComponent,
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
