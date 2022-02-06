import { Component } from '@angular/core';
import { mock_list } from './shopByCards/mock_list';
import { ProductModel } from './shopByCards/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vans';
  products : ProductModel [] = [];

  constructor() {
    for (var x of mock_list) {
      console.log(x);
      this.products.push(x);
    }
  }
}
