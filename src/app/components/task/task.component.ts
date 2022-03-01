import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/shared/auth.service'
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  customerlist:any;
  customerresult:any;
  constructor(public _auth:AuthService) { }

  ngOnInit() {
    this.getting()
  }

getting(){
  this._auth.getin().subscribe((data:any[])=>{

    this.customerresult= data;
    this.customerlist=this.customerresult.results;
    console.log(this.customerlist)
  })
}
}
