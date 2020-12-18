import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  users : any = [];
 
  // HttpClient can call online API's
  constructor(private _http : HttpClient) { }
 // formValue must have id, name & salary properties
public loginUserfromRemote(user :User):Observable<any>{
  return this._http.post<any>("http://localhost:8090/login",user)
}

  logout(){
    this.logout();
  }
  home(){
    this.home();
  }
  authenticate(id : number, password : string) : Observable<any> {
    let uri = ``;
    return this._http.post("http://localhost:8090/login", {});
  }

  fetchEmployees() : Observable<any> {
    let uri = "";
    return this._http.get(uri);
  }

  login(id : number, password: string) : boolean {
    if((id == 1000 || id == 2000) && password == 'angular') {
      return true;
    } else {
      return false;
    }
  }

  fetchUsers() : Observable<any> {
    let uri = "";
    return this._http.get(uri);
  }

  store(values : any) : any {
    this.users.push(values);
  }

  

}