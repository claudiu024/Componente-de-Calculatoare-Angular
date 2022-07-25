import { Component, Input, OnInit } from '@angular/core';
import { ProductServices } from '../services/product.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  // @Input() 
cart_products:Product []=[];
prod:Product []=[ {
  id: 0,
  title: 'Gigabyte Geforce RTX 3060 TI Eagle',
  description: `Interfata: PCI Express x16 4.0
  Seria: GeForce RTX 3000
  GPU Boost clock: 1695 MHz
  Tip memorie: GDDR6
  Dimensiune memorie: 8 GB`,
  price: 330,
  image:
    'https://2.grgs.ro/images/products/1/6924/2220150/normal/geforce-rtx-3060-ti-eagle-oc-8gb-gddr6-256-bit-84af47ecb3552e0facecdfc9d4b59c58.jpg',
},]
products:Product []=[];
  constructor(private productService:ProductServices,
    private router: Router) { }

  ngOnInit(): void {

  switch(this.router.url) {
    case "/video":
      this.products=this.productService.getVideo();
      break;
    case "/procesor":
      this.products=this.productService.getProcesors();
      break;
    case "/motherboard":
        this.products=this.productService.getMotherboards();
        break;
        case "/RAM":
          this.products=this.productService.getRAM();
           
      break;
      case "/Memory":
        this.products=this.productService.getMemory();
         
    break;
    case "/PC_Cases":
      this.products=this.productService.getCases();
       console.log(this.products[0].description)
  break;
   

  
}}
add(product :Product){
  // console.log(this.cart_products)
this.cart_products.push(product)
// this.productService.getCart()
}
}

export interface Product{
  id:number;
  title:string;
  description:string;
  price:number;
  image:string;
}
