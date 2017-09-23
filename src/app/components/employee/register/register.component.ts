import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { CommonService } from '../../../services/common.service';
import { IEmployee } from '../../../models/employee';
import { IDepartments } from '../../../models/departments';
import { IDesignation } from '../../../models/designation';
import {SelectItem} from 'primeng/components/common/api'; 
import {Message} from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';



@Component({
  selector: 'employee-register',
  templateUrl: './register.component.html',
  providers: [MessageService]
  // styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  pageTitle: string = 'Add Employee';
  errorMessage: string;
  employee: IEmployee = <IEmployee>{};

  departments: IDepartments[];
  designation: IDesignation[];  
  employees: IEmployee[];
  severitytext: string;
  summarytext: string;
  detailstext: string;
  msgs: Message[] = [];
  constructor(private employeeService: EmployeeService, private messageService: MessageService,private commonService: CommonService) { }

  ngOnInit() {
    //this.employee=new IEmployee();
    this.employee.isActive = true;
    this.employee.dateofReleave = null;

    this.commonService.getDepartmentsList()
    .subscribe(departments => { this.departments = departments;},
    error => this.errorMessage = <any>error);

    this.commonService.getDesignationsList()
    .subscribe(designation => { this.designation = designation;},
    error => this.errorMessage = <any>error);
  }
  submitEmployee() {
    console.log(this.employee);
    this.employeeService.insertEmployee(this.employee).subscribe(result => {
      console.log(result);
      this.summarytext="Sucess";
      this.detailstext="Employee created sucessfully.";
      this.severitytext="success";
      this.AddMessage();
      setTimeout(() => {
        this.clear();
        this.employee = <IEmployee>{};
      }, 3000);
    },
      error => this.errorMessage = <any>error);;
    //console.log(this.employee);
  }
  AddMessage() {
   // this.messageService.add({ severity: this.severitytext, summary: this.summarytext, detail: this.detailstext });
    this.msgs = [];
    this.msgs.push({severity:this.severitytext, summary:this.summarytext, detail:this.detailstext});
  }
  clear() {
    this.msgs = [];
    this.messageService.clear();
  }

}
