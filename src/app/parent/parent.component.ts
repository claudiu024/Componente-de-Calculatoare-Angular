import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
receivedChildMessage:string="";
messageTosendToParrent:string="";

  constructor() { }

  ngOnInit(): void {
  }
sendMessage(message:string){
  this.messageTosendToParrent=message;

}
getMessage(message:string){
  this.receivedChildMessage=message;

}

}
