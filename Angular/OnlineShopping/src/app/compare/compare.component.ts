import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Products} from 'src/app/models/products.model'
import { PdtService } from '../services/pdts.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit {
  Prod_Id:any;
  Prod_Name:any;
  Prod_Price:any;
  Prod_Image:any;
  Prod_Description:any;
  Retail_Id:any;
  Product_Quantity:any;
  myCompareArray:Products[]=[{Prod_Id:0,Prod_Name:'',Prod_Price:0,Prod_Image:'',Prod_Description:'',Retail_Id:0,Prod_Quantity:0}];
  id:any;
  product:any;
  constructor(private myRoute:ActivatedRoute,private ProductService:PdtService) {
    this.ngOnInit();
    this.id=this.myRoute.snapshot.params["id"];
    console.log(this.id);
    this.ProductService.getOnePdtFromApi(this.id).
    subscribe((data)=>this.product=data)
   }

  ngOnInit(): void {    
  }  

  CompareProducts(){
    this.myCompareArray.push({Prod_Id:this.Prod_Id,Prod_Name:this.Prod_Name,Prod_Price:this.Prod_Price,Prod_Image:this.Prod_Image,
    Prod_Description:this.Prod_Description,Retail_Id:this.Retail_Id,Prod_Quantity:this.Product_Quantity});
    console.log(this.myCompareArray);
  }

}
