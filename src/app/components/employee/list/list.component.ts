import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { IEmployee } from '../../../models/employee';

@Component({
  selector: 'employee-list',
  templateUrl: './list.component.html',
  // styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  pageTitle: string = 'Employee List';
  listFilter: string;
  errorMessage: string;

  employees: IEmployee[];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    // this.employeeService.getemployList().subscribe((result)=>{
    //   console.log(result);
    // });
    this.employeeService.getEmployeeList()
      .subscribe(employees => { this.employees = employees;},
      error => this.errorMessage = <any>error);
  }
  EditEmployee(empid)
  {
    console.log(empid);
    
  }

}
