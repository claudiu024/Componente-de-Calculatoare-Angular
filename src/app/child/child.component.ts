import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input()
receivedParentMessage:string="";
@Output()
messageToEmit=new EventEmitter<string>();
messageToSendChild:string="Hello parent";
  constructor() { }

  ngOnInit(): void {
  }

  sendMessageToParent(message:string){
this.messageToEmit.emit(message)
  }
}
