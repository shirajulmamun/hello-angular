import { Component, OnInit, Input, EventEmitter, Output, HostBinding, HostListener } from '@angular/core';
import {Product} from '../product';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
 @Input() product: Product;
 @Output() selected: EventEmitter<Product>;

 possibleColors = [
  'darksalmon', 'hotpink', 'lightskyblue', 'goldenrod', 'peachpuff',
  'mediumspringgreen', 'cornflowerblue', 'blanchedalmond', 'lightslategrey'
];

 @HostBinding('style.color') color: string;
  constructor() {
     this.selected = new EventEmitter<Product>();
   }

   productSelected()
   {
     console.log("Click fired of product-item");
      this.selected.emit(this.product);
   }

   @HostListener('click') newColor() {
    const colorPick = Math.floor(Math.random() * this.possibleColors.length);
    this.color = this.possibleColors[colorPick];
  }

  ngOnInit() {
  }

}
