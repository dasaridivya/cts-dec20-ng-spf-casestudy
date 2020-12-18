import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-policyform',
  templateUrl: './policyform.component.html',
  styleUrls: ['./policyform.component.css']
})
export class PolicyformComponent  {

  FirstName: string = undefined;
  LastName : string = undefined;
  address:  string  = undefined;
  contact:  string  = undefined;
  email:    string  = undefined;
  password: string   = undefined;
  cpassword:string  = undefined;
  message : string = undefined; 

  constructor(private _router : Router,private _service:UserService) {}


  handleFormValues(formValues : any) {
     console.log(formValues);
     this._router.navigate(["userpolicy"]);
     }
  
  home(){
  this._router.navigate([""]);
  }
  
  
  
}


  




