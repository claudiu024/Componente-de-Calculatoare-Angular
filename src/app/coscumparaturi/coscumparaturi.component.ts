import { Component, Input, OnInit } from '@angular/core';
import { ProductServices } from '../services/product.service';
import { Product } from '../product/product.component';

@Component({
  selector: 'app-coscumparaturi',
  templateUrl: './coscumparaturi.component.html',
  styleUrls: ['./coscumparaturi.component.css']
})
export class CoscumparaturiComponent implements OnInit {

  constructor(private productService:ProductServices) { }
 prod:Product[]=[];
  ngOnInit(): void {
    this.prod=this.productService.getCart()
  };

}
