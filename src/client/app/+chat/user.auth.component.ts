import {Component, OnInit} from '@angular/core';
import {ChatService} from "../shared/chat/chat.service";

@Component({
  moduleId: module.id,
  selector: 'ct-auth',
  templateUrl: 'user.auth.component.html'
})
export class UserAuthComponent implements OnInit {
  private username : string;
  constructor(private chatService: ChatService) {
  }

  ngOnInit() {
  }

  login(){
    this.username && this.chatService.login(this.username);
  }

  keypressHandler(event){
    if (event.keyCode  === 13){
      this.login();
    }
  }

}
