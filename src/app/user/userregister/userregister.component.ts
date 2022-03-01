import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms';
import {passwordvalidator} from 'src/app/shared/passwordvalidation'
@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userregister:FormGroup = new FormGroup({
    FullName:new FormControl('',[Validators.required]),
    LastName:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    confirmpassword:new FormControl('',[Validators.required])
  },{validators:passwordvalidator});
  onSubmit(){
console.log(this.userregister.value)
  }
}
