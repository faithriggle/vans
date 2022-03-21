import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Injectable } from "@angular/core";
import { ProductModel } from "./product.model"

@Injectable ({
    providedIn: 'root'
})
export class shopByServices {

    constructor(private db:AngularFireDatabase) {
        
    }

    public getShopBy() {
        return this.db.list<ProductModel>("products").valueChanges();
    }
}