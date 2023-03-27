import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'BookingFlowersite';
  primary =false;

  //Object created for Class binding Nav bar chnaging
  themecolor={
    'bg-purple':true,
    'bg-plum':false
  };
  toggletheme()
  {
    this.primary= !this.primary;
    this.themecolor={
      'bg-purple': this.primary,
      'bg-plum': !this.primary
    }
   alert("Click Again ")

  }
  mytime=new Date()

  datefunction(){
    alert(this.mytime);
  }
//Addto cart

  cartCount=0;

  constructor(private pro_ser:ProductService){}
  ngOnInit(): void {
    this.pro_ser.cartCount$.subscribe(count =>{
      console.log(count);
      this.cartCount= count;
    })
     }

    getcartCount():void{
     //this.cartCount=this.pro_ser.cartcount;


    }

}
