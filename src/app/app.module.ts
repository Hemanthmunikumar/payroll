import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { EmployregisterComponent } from './employregister/employregister.component';
import { FooterComponent } from './footer/footer.component';
import { APP_ROUTER_PROVIDERS, routes } from './app.routes';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './shared/notfound/notfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    EmployregisterComponent,
    FooterComponent,LoginComponent,NotFoundComponent,DashboardComponent
  ],
  imports: [
    BrowserModule,APP_ROUTER_PROVIDERS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
