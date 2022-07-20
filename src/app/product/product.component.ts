import { Component, OnInit } from '@angular/core';
import { ProductServices } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
products:Product []=[];
  constructor(private productService:ProductServices) { }

  ngOnInit(): void {
    this.products=this.productService.getProducts();
  }

}

export interface Product{
  id:number;
  title:string;
  description:string;
  price:number;
  image:string;
}