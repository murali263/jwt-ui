import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../app/material/material/material.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AuthService } from './shared/auth.service';
import { AdminTokenInterceptorService } from './shared/admin-token-interceptor.service';
import { LogoutComponent } from './components/logout/logout.component';
import { TaskComponent } from './components/task/task.component';
import { AddtaskComponent } from './components/addtask/addtask.component';
import { UserregisterComponent } from './user/userregister/userregister.component';
import { UserloginComponent } from './user/userlogin/userlogin.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    PagenotfoundComponent,
    LogoutComponent,
    TaskComponent,
    AddtaskComponent,
    UserregisterComponent,
    UserloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [AuthService,{
    provide:HTTP_INTERCEPTORS,
    useClass:AdminTokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
