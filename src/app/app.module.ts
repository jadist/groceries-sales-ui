import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { ServiceModule } from './service.module';

import { SidebarDummyComponent } from '../app/sidebar/dummy/sidebar-dummy.component';
import { TitleOnlyComponent } from '../app/sidebar/title-only/title-only.component';

@NgModule({
  declarations: [AppComponent, SidebarDummyComponent, TitleOnlyComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MaterialModule,
    ServiceModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
