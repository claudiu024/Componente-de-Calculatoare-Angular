import { Product } from '../product/product.component';
import { Injectable } from '@angular/core';
@Injectable({providedIn:"root"})

export class ProductServices {
  products: Product[] = [
    {
      id: 0,
      title: 'Geforce RTX 3060 TI',
      description: 'Memorie: 8gb-gddr6',
      price: 230,
      image:'https://2.grgs.ro/images/products/1/6924/2220150/normal/geforce-rtx-3060-ti-eagle-oc-8gb-gddr6-256-bit-84af47ecb3552e0facecdfc9d4b59c58.jpg',
    },
    {
      id: 1,
      title: 'Radeon RX 6600',
      description: 'Memorie: 8gb-gddr6',
      price: 300,
      image:'https://4.grgs.ro/images/products/1/9551/2281078/normal/radeon-rx-6600-pulse-8gb-gddr6-128-bit-3c2241727880706ba578ef7294bfc94c.jpg',

    },
  ];

  getProducts(){
return this.products;
  }
}