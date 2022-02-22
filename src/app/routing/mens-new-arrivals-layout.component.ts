import { Component } from "@angular/core";
import { mock_product_list } from "../mensNewArrivals/productCards/mock_product_list";
import { ProductItemModel } from "../mensNewArrivals/productCards/product-item.model";

@Component ({
    selector: 'vans-mens-arrivals',
    templateUrl: 'mens-new-arrivals-layout.component.html',
    styleUrls: ['mens-new-arrivals-layout.component.css']
})
export class MensNewArrivalsLayoutComponent {
    products : ProductItemModel [] = [];

    constructor() {
        for (var product of mock_product_list )
            this.products.push(product);
    }
}