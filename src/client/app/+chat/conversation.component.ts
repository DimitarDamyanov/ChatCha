import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {ChatService} from "../shared/chat/chat.service";

@Component({
  moduleId: module.id,
  selector: 'ct-cnv',
  templateUrl: 'conversation.component.html'
})
export class ConversationComponent implements OnInit {
  private messages: string[] = [];
  @ViewChild('conversationScroll') private conversationCntScroll: ElementRef;

  constructor(private _chatService: ChatService) {
  }

  ngOnInit() {
    this._chatService.messageReceivedEvent.subscribe(
      (msg) => {
        this.messages.push(msg);
        this.scrollToBottom();
      });

  }

  scrollToBottom(): void {
      this.conversationCntScroll.nativeElement.scrollTop = this.conversationCntScroll.nativeElement.scrollHeight;
  }

}
