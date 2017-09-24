import { NgModule }  from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {CalendarModule} from 'primeng/primeng';
import { MessagesModule} from 'primeng/primeng';
import {FileUploadModule} from 'primeng/primeng';


@NgModule({
   
    imports: [ CommonModule ,CalendarModule, MessagesModule,FileUploadModule],
    exports: [
        CommonModule,
        FormsModule,
        CalendarModule,
        MessagesModule,
        FileUploadModule
    ]
})
export class SharedModule { }
