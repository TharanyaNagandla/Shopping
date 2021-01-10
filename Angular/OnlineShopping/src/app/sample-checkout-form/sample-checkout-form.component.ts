import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-checkout-form',
  templateUrl: './sample-checkout-form.component.html',
  styleUrls: ['./sample-checkout-form.component.scss']
})
export class SampleCheckoutFormComponent implements OnInit {
  checkout:any={}
  

  constructor() { }

  ngOnInit(): void {
  }
  data:any;
  OnSubmit(data: any)
  {
    console.log(data);
  }

}
