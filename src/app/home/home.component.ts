import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
title:string="home title"
public date=new Date 
buttonDisable:boolean=true
color:string="green"
  constructor() { }

  ngOnInit(): void {
  }


changeButton():void{
  this.title="new title"
  this.color="red";
}

changeTitle():void{
  this.title="new title"
  this.color="red";
}
}