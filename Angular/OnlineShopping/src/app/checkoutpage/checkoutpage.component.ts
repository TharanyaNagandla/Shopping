import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,NgModel,Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { CheckoutService } from '../services/checkout.service';
import {CheckOut} from '../models/checkout.model'


@Component({
  selector: 'app-checkoutpage',
  templateUrl: './checkoutpage.component.html',
  styleUrls: ['./checkoutpage.component.scss']
})
export class CheckoutpageComponent implements OnInit {
  checkout:any={}
  //myCheckout!: FormGroup;
  //fullname:string="";

  id:any;
  order:any;
 
  constructor(private myRoute:ActivatedRoute,private checkoutService:CheckoutService,private fb:FormBuilder ,private route:Router) { 
    this.ngOnInit();
    this.order=new CheckOut();
    this.id= this.myRoute.snapshot.params["id"];
    console.log(this.id);
    this.checkoutService.getOrdersfromCart(this.id).subscribe(data=>
    this.order=data);  
  }
  ngOnInit(): void {     
  }
  
  // OnSubmit(){
  //   this.ngOnInit();
  //   this.route.navigate(["thankyou"])
  // }

  
  OnSubmit(){
    this.checkoutService.updateOrdersDeleteCart(this.order.User_Id,this.order).subscribe(msg=>
    console.log("Called"));
    }

 
  // this.myCheckout=this.fb.group({

    //     fullname:['',[Validators.required]],
    //     email:['',[Validators.required]],
    //     doornumber:['',[Validators.required]],
    //     street:['',[Validators.required]],
    //     city:['',[Validators.required]],
    //     state:['',[Validators.required]],
    //     zipcode:['',[Validators.required]],        
    //     cardholdername:['',[Validators.required]],
    //     cardnumber:['',[Validators.required]],
    //     expirydate:['',[Validators.required]],
    //     cvv:['',[Validators.required]]

    //   });
}
