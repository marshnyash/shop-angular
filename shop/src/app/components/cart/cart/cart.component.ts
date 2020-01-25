import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductModel } from '../../products/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  boughtProducts: ProductModel[];
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.boughtProducts = this.cartService.getBoughtProducts();
  }
}
