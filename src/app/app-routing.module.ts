import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddtaskComponent } from './components/addtask/addtask.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { RegisterComponent } from './components/register/register.component';
import { TaskComponent } from './components/task/task.component';
import {UserregisterComponent} from './user/userregister/userregister.component'
import{AuthGuard} from './guard/auth.guard'
import { UserloginComponent } from './user/userlogin/userlogin.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/home'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate:[AuthGuard]

  },
  {
    path:'userlogin',
    component:UserloginComponent
  },
  {
    path:'logout',
    component:LogoutComponent
  },
  {
    path:'task',
    component:TaskComponent
  },
  {
    path:'addtask',
    component:AddtaskComponent
  },
  {
    path:'userregister',
    component:UserregisterComponent
  },
  {
    path:'**',
    component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
