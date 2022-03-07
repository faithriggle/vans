import { Component, OnInit } from "@angular/core";
import { mock_list } from "../shopByCards/mock_list";
import { ProductModel } from "../shopByCards/product.model";
import { shopByServices } from "../shopByCards/shopBy.service";

@Component ({
    selector: 'vans-home-layout',
    templateUrl: 'home-layout.component.html',
    styleUrls: ['home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit{
    products : ProductModel [] = [];

    constructor(private shopByService: shopByServices) {
      for (var x of mock_list) {
        console.log(x);
        this.products.push(x);
      }
    }

  ngOnInit(): void {
    this.shopByService.getShopBy().subscribe(data => {
      console.log(data);
      for (var card of data) {
        console.log(card);
        this.products.push(card);
      }
    })
  }
}