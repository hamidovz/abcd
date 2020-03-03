import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http'; 
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  public apiBase = environment.apiEndpoint;

  public apiUrl = {

    userRegister : `${this.apiBase}/user/register`,
    
    loginUser : `${this.apiBase}/user/login`,

    logOut : `${this.apiBase}/user/logout`,

    sendSms : `${this.apiBase}/user/sendPhoneNumber`,

    verifySmsCode : `${this.apiBase}/user/confirmPhoneNumber`,

    checkIfNumberExists : `${this.apiBase}/user/checkDuplicate`,

    setNewPassword : `${this.apiBase}/user/setNewPassword`,

    user : `${this.apiBase}/user`,

    visitedTours : `${this.apiBase}/booking/getWent/`,

    plannedTours : `${this.apiBase}/booking/getWillGo/`



    // checkIfNumberExists : "http"

  }

  // public userToken = localStorage.accessToken;

  public userOptions;

  public createHeader(){

    this.userOptions = {
    
      headers: new HttpHeaders({"Content-Type" : "application/json" , "Authorization" : "Bearer " + localStorage.getItem("accessToken")})

    }
  }


 public passwordForgetOptions = {
    
  headers: new HttpHeaders({"Content-Type" : "application/json"})

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

  public setNewPassword( newPassData ){

    return this.http.post( this.apiUrl.setNewPassword , newPassData , this.passwordForgetOptions);

  }

  public checkIfNumberExists( number ){

    return this.http.post( this.apiUrl.checkIfNumberExists , number, this.options );

  }

  public getUserById(id){

    this.createHeader();

    return this.http.get( this.apiUrl.user + `/${id}` , this.userOptions );

 }
 
 

 //getdiyim turlar

 public getVisitedTours(){

  this.createHeader();

  return this.http.get( this.apiUrl.visitedTours + localStorage.getItem("userId") , this.userOptions );

 }


 //gedeceyim turlar (planlasdirilmis turlar)

 public getPlannedTours(){

  this.createHeader();

  console.log("ok");
  return this.http.get( this.apiUrl.plannedTours + localStorage.getItem("userId") , this.userOptions );

 }

  constructor( public http : HttpClient ) { }
}
