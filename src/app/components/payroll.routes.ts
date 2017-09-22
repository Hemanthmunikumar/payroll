import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PayrollComponent } from './payroll.component';

export const PayrollRoutes: Routes = [
    { path: 'payroll', redirectTo: 'payroll/dashboard', pathMatch: 'full' },
    {
        path: 'payroll',
        component: PayrollComponent,
        canActivate: [],
        children:
        [
            { path: 'dashboard', component: DashboardComponent },
            {
                path: 'employee',
                loadChildren: './components/employee/employee.module#EmployeeModule',
                data: {
                    preload: false
                }
            },
        ]
    }
];

// export const AUTH_PROVIDERS = [AuthGuard, AuthService, ConfirmDeactivateGuard];
export const PAYROLL_ROUTER_PROVIDERS = [RouterModule.forChild(PayrollRoutes)];
