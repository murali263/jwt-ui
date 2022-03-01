import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/shared/auth.service';
import {ToastrService} from 'ngx-toastr';
import {FormControl,FormGroup,Validators} from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   user;
  constructor(public _auth:AuthService,public _toster:ToastrService,public _router:Router) { }

  ngOnInit(): void {
  }
  adminForm:FormGroup = new FormGroup({
    username:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
  })
  onSubmit(){
    if(this.adminForm.valid){
      this._auth.Loginadmin(this.adminForm.value).subscribe(res=>{
        localStorage.setItem('myadmin',res.token)
        //localStorage.setItem('userFormValues',JSON.stringify(this.adminForm.value));
       // this.user = localStorage.getItem('userFormValues')
       localStorage.setItem('currentUser', this.adminForm.value.username);


      },err=>console.log(err))

      this._router.navigate(['/dashboard'])
    }
    else{

    this._toster.error('Check Your Login credentials')

    }

  }


}
