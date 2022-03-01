import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public _auth:HttpClient,public _router:Router) { }

  public currentUser=[] as any;
  registerURL = "http://localhost:5000/api/register";
  ListURL = "http://localhost:5000/api/list";
  LoginURL = "http://localhost:5000/api/login";
  empleyURL = "http://localhost:5000/api/employee";


  insertadmmin(user){
    return this._auth.post<any>(this.registerURL,user)
  }
  getin(){
    return this._auth.get<any>(this.ListURL)
  }
  Loginadmin(users:any){
   return this._auth.post<any>(this.LoginURL,users)
  }
  isLogined(){
    return !!localStorage.getItem('myadmin')
  }
  getToken(){
   return localStorage.getItem('myadmin')
  }
  logoutadmin(){
     localStorage.removeItem('myadmin')
     this._router.navigate(['/home'])
  }
  setCurrentUser(user){
    this.currentUser= user
  }





  //crud operations

  employeinsert(user){
return this._auth.post(this.empleyURL,user)
  }
  employeget(){
    return this._auth.get(this.ListURL)
  }
}
