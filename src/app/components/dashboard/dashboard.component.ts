import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
display=[];
  constructor(public _auth:AuthService) { }

  ngOnInit(): void {
    this._auth.getin().subscribe(res=>this.display=res,err=>console.log(err))
  }

}
