import { Component } from "@angular/core";
import { mock_list } from "../shopByCards/mock_list";
import { ProductModel } from "../shopByCards/product.model";

@Component ({
    selector: 'vans-home-layout',
    templateUrl: 'home-layout.component.html',
    styleUrls: ['home-layout.component.css']
})
export class HomeLayoutComponent {
    products : ProductModel [] = [];

    constructor() {
      for (var x of mock_list) {
        console.log(x);
        this.products.push(x);
      }
    }
}