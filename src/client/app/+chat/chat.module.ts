import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ChatComponent } from './chat.component';
import {MaterializeDirective} from "angular2-materialize";

@NgModule({
    imports: [CommonModule, SharedModule],
    declarations: [ChatComponent,MaterializeDirective],
    exports: [ChatComponent],
    providers: []
})

export class ChatModule { }
