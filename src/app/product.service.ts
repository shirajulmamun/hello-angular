import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Product} from './product';

const httpOptions = {
  'content-Type' : 'application/json'
};


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private  apiUrl  = 'http://localhost:49558/api/product/';

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl) ;
  }

  addProduct(product: Product)
  {
     return this.http.post(this.apiUrl, product, httpOptions);
  }
  constructor(private http: HttpClient) { }
}
