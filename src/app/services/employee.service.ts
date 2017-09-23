import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import {constants} from '../config/constants';
// import { HttpClient } from '../core/http.client';
import { IEmployee } from '../models/employee';

@Injectable()
export class EmployeeService {
    constructor(private _http:Http){

    }
    
    getemployList(){
        return this._http.get(constants.serviceurl+constants.employeedata);
    }
    getemployeeList(): Observable<IEmployee[]> {
        return this._http.get(constants.serviceurl+constants.employeedata)
            .map((response: Response) => <IEmployee[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}