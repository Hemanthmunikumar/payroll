import { RouterModule, Routes } from '@angular/router';
import { PAYROLL_ROUTER_PROVIDERS, PayrollRoutes } from './components/payroll.routes';
import { EMPLOYEE_ROUTER_PROVIDERS, EmployeeRoutes} from './components/employee/employee.routes'
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { LOGIN_SERVICE_PROVIDERS } from './login/login.routes';
// import { DASHBOARD_ROUTER_PROVIDERS, EclipseRoutes } from './eclipse.routes';
// import { LogoutComponent } from './login/logout.component';
// import { NotAuthorizedComponent } from './shared/notauthorized/notauthorized.component';
import { NotFoundComponent } from './shared/notfound/notfound.component';
// import { PreloadSelectedModules } from './core/module.preload.strategy';
// import { AuthorizeComponent } from './login/authorize.component'

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'home', component: DashboardComponent },
    //{ path: 'logout', component: LogoutComponent },
    //{ path: 'authorize/:accessToken', component: AuthorizeComponent },
    ...PayrollRoutes,
    //{ path: 'notauthorized', component: NotAuthorizedComponent },
    { path: '**', component: NotFoundComponent }
];
export const APP_ROUTER_PROVIDERS = [RouterModule.forRoot(routes)];