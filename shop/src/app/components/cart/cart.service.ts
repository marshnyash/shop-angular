import { Injectable } from '@angular/core';
import { ProductModel } from '../products/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  getBoughtProducts(): ProductModel[] {
    const boughtProductList = [
      {
        id: 1,
        title: 'Weather',
        price: 50,
      },
      {
        id: 2,
        title: 'Development',
        price: 50,
      },
    ];
    return boughtProductList;
  }
}
