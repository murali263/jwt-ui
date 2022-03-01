import { Injectable, Injector } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http'
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AdminTokenInterceptorService implements HttpInterceptor{

  constructor( public injector:Injector) { }

  intercept(req,next){
let authservice = this.injector.get(AuthService)
    let tokenauthrized = req.clone(
{
  setHeaders :{
    authorization : `Name ${authservice.getToken()}`
  }
}
    )
    return next.handle(tokenauthrized)

  }

}
