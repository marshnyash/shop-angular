import { Injectable } from '@angular/core';
import { ProductModel } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  getProducts(): ProductModel[] {
    const productList = [
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
      {
        id: 3,
        title: 'Development',
        price: 100,
      },
    ];
    return productList;
  }
}
