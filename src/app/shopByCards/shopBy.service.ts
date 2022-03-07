import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { ProductModel } from "./product.model"

@Injectable ({
    providedIn: 'root'
})
export class shopByServices {
    private baseUrl:string = "https://vans-app-b9fa4-default-rtdb.firebaseio.com/"
    private shopByEndpoint:string = "shopby.json"

    constructor(private http:HttpClient) {
        
    }

    public getShopBy() {
        return this.http.get<ProductModel []>("this.baseUrl + this.shopByEndpoint");
    }
}