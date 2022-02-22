export class ProductItemModel {
    img: string;
    price: number;
    desc1: string;
    desc2: string;
    quantity: string;

    constructor(img:string, price:number, desc1:string, desc2:string, quantity:string) {
        this.img = img;
        this.price = price;
        this.desc1 = desc1;
        this.desc2 = desc2;
        this.quantity = quantity;
    }
}