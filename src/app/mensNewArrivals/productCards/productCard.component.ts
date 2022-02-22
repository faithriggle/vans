import { Component, Input } from "@angular/core";

@Component ({
    selector: 'vans-mens-products',
    templateUrl: 'productCard.component.html',
    styleUrls: ['productCard.component.css']
})
export class ProductCardComponent {
    @Input() img: string;
    @Input() price: number;
    @Input() desc1: string;
    @Input() desc2: string;
    @Input() quantity: string;

    constructor() {
        this.img = "";
        this.price = 0;
        this.desc1 = "";
        this.desc2 = "";
        this.quantity = "";
    }
}