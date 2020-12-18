import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  id : number = undefined;
  constructor(private _activatedRoute : ActivatedRoute) { }

  // this is executed after the constructor
  ngOnInit(): void {
    // immediately you can initialize id by extracting the path, 
    // the path to react to this component is success/:employeeId hence employeeId must be 
    // extracted
    this._activatedRoute.params.subscribe((key : Params) => this.id = key.userid);
  }
}
