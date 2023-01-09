import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './routed-pages/login/login.component';
import { RegisterComponent } from './routed-pages/register/register.component';
import { QuotationComponent } from './routed-pages/sales/transaction/quotation/quotation.component';
import { PurchaseOrderComponent } from './routed-pages/sales/transaction/purchase-order/purchase-order.component';
import { ProductComponent } from './routed-pages/sales/master/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    QuotationComponent,
    PurchaseOrderComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
