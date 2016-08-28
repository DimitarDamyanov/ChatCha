import { Component, OnInit } from '@angular/core';
import {UserAuthComponent} from "./user.auth.component";
import {ChatService} from "../shared/chat/chat.service";
import {SendMessageComponent} from "./send.message.component";
import {ConversationComponent} from "./conversation.component";

/**
 * This class represents the lazy loaded ChatComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'chat',
  templateUrl: 'chat.component.html',
  directives: [UserAuthComponent, SendMessageComponent, ConversationComponent],
  providers: [ChatService]
})

export class ChatComponent implements OnInit {
  private isUserLogged = false;
  constructor(private  _chatService: ChatService){

  }

  ngOnInit() {
    this._chatService.userLoggedEvent.subscribe(() => this.isUserLogged = true);
  }


}
