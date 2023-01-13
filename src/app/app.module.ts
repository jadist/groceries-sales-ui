import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FirebaseAuthService } from './services/firebase-auth/firebase-auth.service';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './routed-pages/login/login.component';
import { RegisterComponent } from './routed-pages/register/register.component';
import { QuotationComponent } from './routed-pages/sales/transaction/quotation/quotation.component';
import { PurchaseOrderComponent } from './routed-pages/sales/transaction/purchase-order/purchase-order.component';
import { ProductComponent } from './routed-pages/sales/master/product/product.component';
import { TopbarComponent } from './components/main/topbar/topbar.component';
import { SidebarComponent } from './components/main/sidebar/sidebar.component';
import { AsTableComponent } from './components/content/as-table/as-table.component';
import { AsDetailComponent } from './components/content/as-detail/as-detail.component';
import { ForgotPasswordComponent } from './routed-pages/forgot-password/forgot-password.component';
import { FooterComponent } from './components/main/footer/footer.component';
import { EntryComponent } from './components/main/entry/entry.component';
import { UserRoleComponent } from './routed-pages/user/user-role/user-role.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    QuotationComponent,
    PurchaseOrderComponent,
    ProductComponent,
    TopbarComponent,
    SidebarComponent,
    AsTableComponent,
    AsDetailComponent,
    ForgotPasswordComponent,
    FooterComponent,
    EntryComponent,
    UserRoleComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,

    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
