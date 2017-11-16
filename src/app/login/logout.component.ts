import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../services/employee.service';
import { Router } from '@angular/router';
import { BaseComponent } from "./../core/base.component";
@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html',
    providers: [EmployeeService]
    //styleUrls: ['./navbar.component.css']
})
export class LogoutComponent extends BaseComponent implements OnInit {

    constructor(private router: Router) {
        super();
    }

    ngOnInit(): void {debugger;
        // this._employeeService.logout();
        this._sessionHelper.removeAll();
        this.router.navigate(['/login']);
    }

}