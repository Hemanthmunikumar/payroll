import { NgModule }  from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {CalendarModule} from 'primeng/primeng';
import { MessagesModule} from 'primeng/primeng'


@NgModule({
   
    imports: [ CommonModule ,CalendarModule, MessagesModule],
    exports: [
        CommonModule,
        FormsModule,
        CalendarModule,
        MessagesModule
    ]
})
export class SharedModule { }
