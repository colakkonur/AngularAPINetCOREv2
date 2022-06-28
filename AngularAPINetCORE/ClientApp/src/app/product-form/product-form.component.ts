import { Component, OnInit } from '@angular/core';
import { Product } from '../Model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  addProduct(name, price, isactive) {
    console.log(name);
    console.log(price);
    console.log(isactive);

    const p = new Product(this.productService.getProducts().length + 1, name, price, isactive);
    this.productService.addProduct(p);
  }
}
