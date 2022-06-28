import { Component } from '@angular/core';
import { Model, Product } from './Model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';

  model = new Model();
  getProducts() {
    return this.model.products;
  }

  
}

