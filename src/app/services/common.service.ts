import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers,RequestOptions  } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import {constants} from '../config/constants';
// import { HttpClient } from '../core/http.client';
import { IDepartments } from '../models/departments';
import { IDesignation } from '../models/designation';

@Injectable()
export class CommonService {
    constructor(private _http:Http){

    }
    
    getDepartmentsList(): Observable<IDepartments[]> {
        return this._http.get(constants.serviceurl+constants.departmentsdata)
            .map((response: Response) => <IDepartments[]> response.json())
            //.do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }
 
    getDesignationsList(): Observable<IDesignation[]> {
        return this._http.get(constants.serviceurl+constants.designationsdata)
            .map((response: Response) => <IDesignation[]> response.json())
           // .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}