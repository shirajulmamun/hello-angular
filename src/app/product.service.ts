import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Product} from './product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private  apiUrl  = 'http://localhost:49558/api/product/';

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(apiUrl) ;
  }

  addProudct(product: Product)
  {
     return this.http.post()
  }
  
  constructor(private http: HttpClient) { }
}
