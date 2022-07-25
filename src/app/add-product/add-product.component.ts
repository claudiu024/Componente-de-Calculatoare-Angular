import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { ProductServices } from '../services/product.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  title:string="";
  description: string="";
  price:number=0;
  constructor(private productService:ProductServices,private router:Router) { }

  ngOnInit(): void {
  }
  add(){console.log("trigger")
    this.productService.createProduct(this.title,this.description,2,this.price)
    }
}

