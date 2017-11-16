import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { IEmployee } from '../models/employee';
import {Message} from 'primeng/components/common/api';
import {SharedModule} from '../shared/shared.module';
import { Router } from '@angular/router';
// import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [EmployeeService]
  //styleUrls: ['./navbar.component.css']
})
export class LoginComponent implements OnInit {
  pageTitle: string = 'Login';
  errorMessage: string;
  employee: IEmployee = <IEmployee>{};
  severitytext: string;
  summarytext: string;
  detailstext: string;
  msgs: Message[] = [];
  constructor( private router: Router,private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  loginEmployee() {
    console.log(this.employee);
    this.employeeService.loginEmployee(this.employee).subscribe(result => {
      console.log(result);
      if(result["status"])
      {        
        // this.summarytext="";
        // this.detailstext="Login sucessfully.";
        // this.severitytext="success";  
        this.employeeService.setAccessToken(result["data"]["token"]);   
        this.router.navigate(['/payroll/dashboard']);  
      }
      else  
      {        
        this.summarytext="";
        this.detailstext="Please check creditionals.";
        this.severitytext="error";        
      }
      this.AddMessage();
      // setTimeout(() => {
      //   this.clear();
      //   this.employee = <IEmployee>{};
      //   this.router.navigate(['/payroll/dashboard']);
      //   //href="/payroll/dashboard"
      // }, 3000);
    },
      error =>{ this.errorMessage = <any>error;
        this.summarytext="Error Message";
        this.detailstext=this.errorMessage;
        this.severitytext="error";
        this.AddMessage();
      });
    //console.log(this.employee);
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