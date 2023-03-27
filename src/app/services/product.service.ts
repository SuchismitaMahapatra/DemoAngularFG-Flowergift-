import { Injectable } from '@angular/core';
import {Subject ,BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private cartcount=0;
  cartCount$ = new Subject<number>();
  constructor( private http: HttpClient){}

  subject$ = new BehaviorSubject<number>(0);


  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(`http://localhost:3000/products`);

  }
  increment():void{
    this.cartcount +=1;
    this.cartCount$.next(this.cartcount);
  }
}
