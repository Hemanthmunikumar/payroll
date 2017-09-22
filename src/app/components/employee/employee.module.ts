import { NgModule } from '@angular/core';
import { EMPLOYEE_ROUTER_PROVIDERS } from './employee.routes';
import { EmployeeComponent } from './employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListComponent } from './list/list.component';
import { RegisterComponent } from './register/register.component';
@NgModule({
    declarations: [EmployeeComponent,DashboardComponent,ListComponent,RegisterComponent],
    exports:[EmployeeComponent,DashboardComponent,ListComponent,RegisterComponent],
    imports: [EMPLOYEE_ROUTER_PROVIDERS ],
    providers: [],
  })
  export class EmployeeModule { }