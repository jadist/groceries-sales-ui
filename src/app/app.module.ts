import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material.module';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './modules/app-routing.module';

import { LoginComponent } from './pages/login/login.component';
import { EntryComponent } from './components/main/entry/entry.component';

@NgModule({
  declarations: [AppComponent, EntryComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    FormsModule,
    ReactiveFormsModule,

    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
