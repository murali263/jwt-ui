import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public _auth:AuthService,public _router:Router){}
  canActivate():boolean
  {
   if(this._auth.isLogined()){
     return true
   }
   else{
     this._router.navigate(['/login'])
   }
  }

}
