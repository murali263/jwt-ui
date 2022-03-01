import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {AuthService} from 'src/app/shared/auth.service'
@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  constructor(public _auth:AuthService) { }

  ngOnInit(): void {
  }
  adminForm:FormGroup=new FormGroup({
    username:new FormControl('',[Validators.required]),
    department:new FormControl('',[Validators.required]),
    phonenumber:new FormControl('',[Validators.required])
  })
  onSubmit(){
    console.log(this.adminForm.value)
    this._auth.employeinsert(this.adminForm.value).subscribe(res=>{
      console.log(res)
    })
  }
}
