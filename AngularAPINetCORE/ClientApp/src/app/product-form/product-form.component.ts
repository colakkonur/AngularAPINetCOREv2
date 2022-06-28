import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addProduct(name, price, isactive) {
    console.log(name);
    console.log(price);
    console.log(isactive);
  }
}
