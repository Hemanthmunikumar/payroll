import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// import { HttpClient } from '../core/http.client';

@Injectable()
export class EmployeeService {
    constructor(private _http:Http){

    }
    
    getList(){
        return this._http.get('https://jsonplaceholder.typicode.com/posts');
    }
}