import {Injectable, Output, EventEmitter} from '@angular/core';
import { Config } from '../index';

@Injectable()
export class ChatService {
  private userName;
  private socket;
  @Output() userLoggedEvent = new EventEmitter(true);
  @Output() messageReceivedEvent = new EventEmitter(true);

  constructor() {
    this.socket = io(Config.API);

    this.socket.on('userLogged', function(data) {
      if(data.logged){
        this.userLoggedEvent.emit(true);
      }
    }.bind(this));

    this.socket.on('chatUpdate', function(data) {
      console.log(data);
      this.messageReceivedEvent.emit(data);
    }.bind(this));
  }

  login(userName){
    this.userName = userName;
    this.socket.emit('newUser', this.userName);
  }

  sendMessage(msg){
    this.socket.emit('newMessage', {
      'userName': this.userName,
      'text': msg
    });
  }

}
