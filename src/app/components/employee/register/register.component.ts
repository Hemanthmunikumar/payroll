import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { CommonService } from '../../../services/common.service';
import { IEmployee } from '../../../models/employee';
import { IDepartments } from '../../../models/departments';
import { IDesignation } from '../../../models/designation';
import {SelectItem} from 'primeng/components/common/api'; 
import {Message} from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { Router,ActivatedRoute } from '@angular/router';


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
  uploadedFiles: any[] = [];
  constructor(private _router: Router,private _activatedRoute: ActivatedRoute,private employeeService: EmployeeService, private messageService: MessageService,private commonService: CommonService) { 
    console.log('active:'+this._activatedRoute);
    this._activatedRoute.params.subscribe(params => {
      this.employee.empId=params['empid'];      
    });
    
  }

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

    //if empid is avaliable get the record
    console.log('emp is:'+this.employee.empId)
    if(this.employee.empId!=undefined)
    {
    this.employeeService.getEmployeeDetails(this.employee.empId)
    .subscribe(employee => { this.employees = employee;},
      error => this.errorMessage = <any>error);
    }
  }
  submitEmployee() {
    console.log(this.employee);
    console.log(this.uploadedFiles);
    // this.employeeService.insertEmployee(this.employee).subscribe(result => {
    //   console.log(result);
    //   this.summarytext="Success Message";
    //   this.detailstext="Employee created sucessfully.";
    //   this.severitytext="success";
    //   this.AddMessage();
    //   setTimeout(() => {
    //     this.clear();
    //     this.employee = <IEmployee>{};
    //   }, 3000);
    // },
    //   error => this.errorMessage = <any>error);;
    //console.log(this.employee);
  }
  onUpload(event) {
    debugger;
    console.log(event);
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }

    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'File Uploaded', detail: ''});
}
  AddMessage() {
   // this.messageService.add({ severity: this.severitytext, summary: this.summarytext, detail: this.detailstext });
    this.msgs = [];
    this.msgs.push({severity:this.severitytext, summary:this.summarytext, detail:this.detailstext});
  }
  clear() {
    this.msgs = [];
    //this.messageService.clear();
  }

}
