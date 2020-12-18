import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgForm} from '@angular/forms'

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PolicyformComponent } from './policyform/policyform.component';
import { FormsModule } from '@angular/forms';
import { UserpolicyComponent } from './userpolicy/userpolicy.component';
import { Routes, RouterModule} from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SuccessComponent } from './success/success.component';
let routes : Routes = [
  {path : "", component: HomepageComponent}, 
  {path: "",component:HomepageComponent},
  {path : "register", component: PolicyformComponent}, 
  {path : "userpolicy", component: UserpolicyComponent},
  {path : "success",component:SuccessComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    PolicyformComponent,
    UserpolicyComponent,
    HomepageComponent,
    SuccessComponent,
  
  

  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(routes), HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
