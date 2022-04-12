import { Component, OnInit } from '@angular/core';
import { ProductItemModel } from '../mensNewArrivals/productCards/product-item.model';
import { ProductsService } from '../mensNewArrivals/productCards/products.service';

@Component({
  selector: 'vans-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(public ps : ProductsService) { }

  ngOnInit(): void {
  }
  
  addProduct(product : ProductItemModel) {
    console.log("You clicked add product");
    this.ps.addProduct(product);
  }
}
