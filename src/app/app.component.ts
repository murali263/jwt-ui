import { Component } from '@angular/core';
import {AuthService} from 'src/app/shared/auth.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
public user;
  title = 'jwt-ui';

  constructor(public _auth:AuthService){}
  display(){
  this.user =JSON.parse(localStorage.getItem('currentUser'))
  console.log(this.user)

}

}
