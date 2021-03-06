import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatdetailsComponent } from './catdetails/catdetails.component';
import { CheckoutpageComponent } from './checkoutpage/checkoutpage.component';
import { GetallpdtComponent } from './getallpdt/getallpdt.component';
import { HomeComponent } from './home/home.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { OrdersComponent } from './orders/orders.component';
import { PdtdetailComponent } from './pdtdetail/pdtdetail.component';
import { ThankyoupageComponent } from './thankyoupage/thankyoupage.component';

const routes: Routes = [
  {
    path:'Home',component:HomeComponent, data:{breadcrumb:'Home'}
  },
  {
    path:"Products",component:GetallpdtComponent, data:{breadcrumb:'Products'}
  }, 
  { 
    path:"Details/:id",component:PdtdetailComponent,data:{breadcrumb:'Product Details'}    
  }, 
  {
    path:"DetailsOfCategory/:id",component:CatdetailsComponent,data:{breadcrumb:'Category'}
  }, 
  {
    path:"orders/:id",component:OrdersComponent,data:{breadcrumb:'Your Orders'}
  },
  {
    path:"checkoutpage/:id",component:CheckoutpageComponent
  },
  {
    path:"thankyou",component:ThankyoupageComponent
  },
  {
    path:"thankyou/Home",component:HomeComponent
  },
  {
    path:"myprofile/:id",component:MyprofileComponent
  }
  // {path:"Home",component:HomeComponent, data:{breadcrumb:'Home'}},
  // {path:"Products",component:GetallpdtComponent, data:{breadcrumb:'Products'}},  
  // { path:"Details/:id",component:PdtdetailComponent, loadChildren: () => import('./pdtdetail/pdtdetail.module').then(mod => mod.ShopModule),data:{breadcrumb:'Product-Details'}},  
  // {path:"DetailsOfCategory/:id",component:CatdetailsComponent,data:{breadcrumb:'Category'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
