import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/layout/navbar/navbar.component';
import { SidebarComponent } from './shared/layout/sidebar/sidebar.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { APP_ROUTER_PROVIDERS, routes } from './app.routes';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './shared/notfound/notfound.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PayrollComponent  } from './components/payroll.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MessagesModule} from 'primeng/primeng';

// import { SharedModule } from './shared/shared.module';
// import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    FooterComponent,LoginComponent,NotFoundComponent,DashboardComponent,PayrollComponent
  ],
  imports: [
    BrowserModule,APP_ROUTER_PROVIDERS,HttpModule,BrowserAnimationsModule,FormsModule,MessagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
