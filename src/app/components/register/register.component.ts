import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators } from '@angular/forms';
import {AuthService} from 'src/app/shared/auth.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  display = [];
  constructor(public _auth:AuthService,public _toster:ToastrService,public _router:Router) { }
  adminForm:FormGroup = new FormGroup({
    _id : new FormControl(null),
    username:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
    Email:new FormControl('',[Validators.required]),
    SurName:new FormControl('',[Validators.required])
  })
  ngOnInit(): void {

  }
  onSubmit(){
    if(this.adminForm.valid){
      this._auth.insertadmmin(this.adminForm.value).subscribe(res=>{
        localStorage.setItem('myadmin',res.token)
      },err=>console.log(err))
      this._toster.success(' Successfull Register','success')
      this._router.navigate(['/login'])
    }
    else if(!this.adminForm.valid){
      this._toster.error('Data Not Inserted')
    }
  }

}
