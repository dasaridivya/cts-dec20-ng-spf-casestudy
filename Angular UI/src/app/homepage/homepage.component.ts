import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import {NgForm} from '@angular/forms'
import { User } from '../user';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  id:String=undefined;
  password:string=undefined;
  msg=""
    user =new User();
  constructor(private _service : UserService, private _router : Router) {}
  
  loginUser() {
    //we had to call authenticate to hit the rest end point
    this._service.loginUserfromRemote(this.user).subscribe(data =>
      {console.log("response received");
  this._router.navigate(['/userpolicy'])
    }),
    error =>{
      console.log("exception occurred");
    this.msg="Bad Credentials.Please enter valid Email Id and password"
    
    

    }
  }
}


