import { NgModule } from '@angular/core';
import { EMPLOYEE_ROUTER_PROVIDERS } from './employee.routes';
import { EmployeeComponent } from './employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListComponent } from './list/list.component';
import { RegisterComponent } from './register/register.component';
import { EmployeeService } from '../../services/employee.service';
import { CommonService } from '../../services/common.service';

// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';
import { EmployeeFilterPipe } from './employee-filter.pipe';
@NgModule({
    declarations: [EmployeeComponent,DashboardComponent,ListComponent,RegisterComponent,EmployeeFilterPipe],
    exports:[EmployeeComponent,DashboardComponent,ListComponent,RegisterComponent],
    imports: [EMPLOYEE_ROUTER_PROVIDERS,SharedModule ],
    providers: [EmployeeService,CommonService],
  })
  export class EmployeeModule { }