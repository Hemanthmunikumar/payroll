import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListComponent } from './list/list.component';
import { RegisterComponent } from './register/register.component';


export const EmployeeRoutes: Routes = [
    {
        path: '',
        component: EmployeeComponent,
        children: [
            {
                path: '',
                children: [
                    {
                        path: '', component: DashboardComponent
                    },
                    {
                        path: 'dashboard',
                        component: DashboardComponent
                    },
                    {
                        path: 'list',
                        component: ListComponent
                    },
                    {
                        path: 'register',
                        component: RegisterComponent
                    },
                    {
                        path: 'register/:empid',
                        component: RegisterComponent
                    }
                ],
            },
        ]
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    }
];

    export const EMPLOYEE_ROUTER_PROVIDERS: ModuleWithProviders = RouterModule.forChild(EmployeeRoutes);