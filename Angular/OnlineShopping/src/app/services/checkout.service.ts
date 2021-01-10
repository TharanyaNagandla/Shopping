import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {CheckOut} from '../models/checkout.model'

@Injectable()
export class CheckoutService
{
  constructor(private getHttp:HttpClient,private putHttp:HttpClient )
  {

  }
  public getOrdersfromCart(id:number)
  {
    return this.getHttp.get("http://localhost:62520/api/checkout/"+id);
  }

  public updateOrdersDeleteCart(id:number,checkout:CheckOut)
  {
    return this.putHttp.put("http://localhost:62520/api/checkout/"+id,checkout);
  }
}
