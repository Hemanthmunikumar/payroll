import { NgModule }  from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {CalendarModule} from 'primeng/primeng';



@NgModule({
   
    imports: [ CommonModule ,CalendarModule],
    exports: [
        CommonModule,
        FormsModule,
        CalendarModule
    ]
})
export class SharedModule { }
