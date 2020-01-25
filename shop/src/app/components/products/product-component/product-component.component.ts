import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from '../product.model';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() products: ProductModel;
  constructor() {}

  ngOnInit() {}

  onBuy() {
    console.log('Goods were bought');
  }
}
