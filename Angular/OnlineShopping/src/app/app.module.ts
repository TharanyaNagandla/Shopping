import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatdetailsComponent } from './catdetails/catdetails.component';
import { GetallpdtComponent } from './getallpdt/getallpdt.component';
import { PdtdetailComponent } from './pdtdetail/pdtdetail.component';
import { PdtService } from './services/pdts.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import {BreadcrumbModule} from 'angular-crumbs';
//import {BreadcrumbModule} from 'xng-breadcrumb';
import { FilterPipe } from './pipes/filter.pipe';
import { CheckoutpageComponent } from './checkoutpage/checkoutpage.component';
import { OrdersComponent } from './orders/orders.component';
import { ThankyoupageComponent } from './thankyoupage/thankyoupage.component';
import { OrderService } from './services/orders.service';
import { CheckoutService } from './services/checkout.service';
import { CompareComponent } from './compare/compare.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { MyProfileService } from './services/myprofile.service';
import { SampleCheckoutFormComponent } from './sample-checkout-form/sample-checkout-form.component';




@NgModule({
  declarations: [
    AppComponent,
    CatdetailsComponent,
    GetallpdtComponent,
    PdtdetailComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,

    FilterPipe,

    CheckoutpageComponent,

    OrdersComponent,

    ThankyoupageComponent,

    CompareComponent,

    MyprofileComponent,

    SampleCheckoutFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BreadcrumbModule
  ],
  providers: [PdtService,OrderService,CheckoutService,MyProfileService],
  bootstrap: [AppComponent],
  //schemas: [ CUSTOM_ELEMENTS_SCHEMA ]


})
export class AppModule { }
