import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { SessionHelper } from "./../helpers/session.helper";


export class BaseComponent {
    public _sessionHelper: SessionHelper;
    constructor(){
        this._sessionHelper = new SessionHelper();
    }

    // responseToObject<T>(_response: Observable<Response>) {
    //     return _response.map((response: Response) => <T>response.json());
    // }
}