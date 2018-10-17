import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import {PRODUCTS} from '../mock-products';
import { ProductService } from '../product.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],

})
export class ProductListComponent implements OnInit {

  products: Product[];
  selectedProduct: Product;
  newProduct: Product;

  constructor(private productService: ProductService) {      

  }

  showProduct(product: Product)
  {
    console.log("Show Product Event Fired"+product.name);
      this.selectedProduct = product;
  }


  ngOnInit() {
    this.productService.getProducts().subscribe((productList) => this.products = productList );
  }

}
