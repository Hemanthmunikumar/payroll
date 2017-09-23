import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { IEmployee } from '../../../models/employee';

@Component({
  selector: 'employee-register',
  templateUrl: './register.component.html',
  // styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  pageTitle: string = 'Add Employee';  
  errorMessage: string;

  employees: IEmployee[];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

}
