import { Injectable } from '@angular/core';
import { Model, Product } from './Model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  model = new Model();

  getProducts() {
    return this.model.products;
  }

  addProduct(product: Product) {
    this.model.products.push(product);
  }
}
