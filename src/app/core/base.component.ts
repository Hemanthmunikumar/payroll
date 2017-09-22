import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export class BaseComponent {
    constructor(){

    }

    // responseToObject<T>(_response: Observable<Response>) {
    //     return _response.map((response: Response) => <T>response.json());
    // }
}