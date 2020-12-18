import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-userpolicy',
  templateUrl: './userpolicy.component.html',
  styleUrls: ['./userpolicy.component.css']
})
export class UserpolicyComponent {
     

    constructor(private _router : Router){
      
    }
    logout(){
    this._router.navigate([""]);
    }
  
  }
  


