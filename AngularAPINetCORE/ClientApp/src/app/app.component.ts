import { Component } from '@angular/core';
import { Model } from './Model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';

  model = new Model();

  getCategoryName() {
    return this.model.categoryName;
  }

  getProducts() {
    return this.model.products;
  }
}

