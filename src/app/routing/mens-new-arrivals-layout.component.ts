import { Component, OnInit } from "@angular/core";
import { mock_product_list } from "../mensNewArrivals/productCards/mock_product_list";
import { ProductItemModel } from "../mensNewArrivals/productCards/product-item.model";
import { ProductsService } from "../mensNewArrivals/productCards/products.service";

@Component ({
    selector: 'vans-mens-arrivals',
    templateUrl: 'mens-new-arrivals-layout.component.html',
    styleUrls: ['mens-new-arrivals-layout.component.css']
})
export class MensNewArrivalsLayoutComponent implements OnInit {
    products : ProductItemModel [] = [];

    constructor(private productsService:ProductsService) {
    
    }

    ngOnInit(): void {
        this.productsService.getProducts().subscribe(data => {
            for (var product of data) {
                this.products.push(product);
            }
        })
    }
}