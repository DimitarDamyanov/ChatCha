import {Component, OnInit} from '@angular/core';
import {ChatService} from "../shared/chat/chat.service";

@Component({
  moduleId: module.id,
  selector: 'ct-send-msg',
  templateUrl: 'send.message.component.html'
})
export class SendMessageComponent implements OnInit {
  private msg: string;
  constructor(private chatService : ChatService){
  }

  ngOnInit() {
  }

  send(){
    this.msg && this.chatService.sendMessage(this.msg);
    this.msg = '';
  }

  keypressHandler(event){
    if (event.keyCode  === 13){
      this.send();
    }
  }
}
