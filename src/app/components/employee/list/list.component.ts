import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';

@Component({
  selector: 'employee-list',
  templateUrl: './list.component.html',
  // styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
      this.employeeService.getList().subscribe((result)=>{
        console.log(result);
      });
  }
  

}
