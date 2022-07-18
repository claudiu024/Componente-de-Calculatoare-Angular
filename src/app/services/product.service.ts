import { Injectable } from "@angular/core";
import { Product } from "src/app/product/product.component";


@Injectable({
    providedIn: 'root'
  })
export class ProductServices {
    products : Product[]= [
        {
            id:0,
            title:"test",
            description:"descriere",
            price : 15
        },
        {
            id :1,
            title :"test2",
            description :"descriere2",
            price:20
        }

    ]
    getProducts(){
        return this.products;
    }
}