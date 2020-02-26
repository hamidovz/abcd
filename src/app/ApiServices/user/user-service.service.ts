import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  public apiUrl = {

    userRegister : "http://ziqzaq.az/api/user/register",
    
    loginUser : "http://ziqzaq.az/api/user/login",

    logOut : "http://ziqzaq.az/api/user/logout",

    sendSms : "http://ziqzaq.az/api/user/sendPhoneNumber",

    verifySmsCode : "http://ziqzaq.az/api/user/confirmPhoneNumber",

    checkIfNumberExists : "http://ziqzaq.az/api/user/checkDuplicate"

    // checkIfNumberExists : "http"

  }

  public options = {
    
    headers: new HttpHeaders({"Content-Type" : "application/json"})

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

  public sendSms( phoneNumber ){
    return this.http.post( this.apiUrl.sendSms , phoneNumber , this.options);
  }

  public verifySmsCode( verifyData ){

    return this.http.post( this.apiUrl.verifySmsCode , verifyData , this.options);

  }

  public checkIfNumberExists( number ){

    return this.http.post( this.apiUrl.checkIfNumberExists , number, this.options );

  }

  constructor( public http : HttpClient ) { }
}
