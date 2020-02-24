import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  public apiUrl = {

    userRegister : "http://ziqzaq.az/api/user/register",
    
    loginUser : "http://ziqzaq.az/api/user/login",

    logOut : "http://ziqzaq.az/api/user/logout"

  }

  public options = {
    
    // headers: new HttpHeaders({content}

  }

  public registerUser(userData){

    return this.http.post( this.apiUrl.userRegister , userData );

  }

  public loginUser(loginData){

    return this.http.post( this.apiUrl.loginUser , loginData );

  }

  public logOut(){
    
    return this.http.post( this.apiUrl.logOut,"" );

  }

  constructor( public http : HttpClient ) { }
}
