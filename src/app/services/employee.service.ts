import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers,RequestOptions  } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import {constants} from '../config/constants';
// import { HttpClient } from '../core/http.client';
import { IEmployee } from '../models/employee';

@Injectable()
export class EmployeeService {
    private _storage: Storage;
    constructor(private _http:Http){
        this._storage = sessionStorage;
    }
    
    // getemployList(){
    //     return this._http.get(constants.serviceurl+constants.employeedata);
    // }
    getEmployeeList(): Observable<IEmployee[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', 'JWT ' + this.getAccessToken());
    let options = new RequestOptions({ headers: headers });

        return this._http.get(constants.serviceurl+constants.employeedata, options)
            .map((response: Response) => <IEmployee[]> response.json())
           // .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getEmployeeDetails(empid:string): Observable<IEmployee> {
        let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');    
        //let myParams = new URLSearchParams();
        //myParams.append('empid', empid.toString());	
        let options = new RequestOptions({ headers: myHeaders});
        return this._http.get(constants.serviceurl+constants.employeedetails+'/'+empid,options)
            .map((response: Response) => <IEmployee> response.json())
           // .do(data => console.log('employee: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

 insertEmployee(IEmployee:IEmployee): Observable<IEmployee> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(constants.serviceurl+constants.addemployee,IEmployee,options)
        .map((response: Response) => <IEmployee> response.json())
      //  .do(data => console.log('All: ' +  JSON.stringify(data)))
        .catch(this.handleError);
}

loginEmployee(IEmployee:IEmployee): Observable<IEmployee> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(constants.serviceurl+constants.loginemployee,IEmployee,options)
        .map((response: Response) => <any> response.json())
        .do(data => console.log('All: ' +  JSON.stringify(data)))
        .catch(this.handleError);
}

setAccessToken(token){
    this._storage.setItem("token",token)
}

getAccessToken(){
    return this._storage.getItem("token");
}

logout(){
    this._storage.removeItem("token");
}


    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}