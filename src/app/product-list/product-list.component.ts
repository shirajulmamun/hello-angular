import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import {PRODUCTS} from '../mock-products';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  selectedProduct: Product;
  constructor() { 
        this.products = PRODUCTS;

  }

  showProduct(product: Product)
  {
    console.log("Show Product Event Fired"+product.name);
      this.selectedProduct = product;
  }

  ngOnInit() {
  }

}
