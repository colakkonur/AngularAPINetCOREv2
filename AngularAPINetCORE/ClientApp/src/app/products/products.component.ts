import { Component, OnInit } from '@angular/core';
import { Model } from '../Model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  model = new Model();

  constructor() {
  }

  getCategoryName() {
    return this.model.categoryName;
  }

  getProducts() {
    return this.model.products;
  }

  ngOnInit() {
  }

}
