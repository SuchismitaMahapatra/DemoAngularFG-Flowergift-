import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  imgstyle={
    'width.px':200,
    'height.px':200
           };
   //Adding items to cart

   //constructor(private pro_ser:ProductService){}


   addtocart(event:any,product:any){
       alert("item is added successfully");
       this.pro_ser.increment();
      }

  products : Product[]= []

  constructor(private pro_ser:ProductService){}

  ngOnInit(): void {
    this.pro_ser.getProducts().subscribe(products =>{
      this.products=products;
      this.filtered=products;
    });
     }

   //search box

 filtered=this.products;

  private _filter= '';

  get filter():string{
    return this._filter;
  }
  set filter(fb:string){
    this._filter=fb;
    this.filterproducts(this._filter)
  }

  filterproducts(searchvalue:string){
   this.filtered=this.products.filter(product =>{
    return product.name.toLowerCase().includes(searchvalue.toLowerCase());
   })
  }

}

