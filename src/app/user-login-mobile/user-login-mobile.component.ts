import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../ApiServices/user/user-service.service';

@Component({
  selector: 'user-login-mobile',
  templateUrl: './user-login-mobile.component.html',
  styleUrls: ['./user-login-mobile.component.css']
})
export class UserLoginMobileComponent implements OnInit {

  public labelColor = false;
  public labelColor2 = false;

  constructor( public userService : UserServiceService ) { }

  public changeColorToBlue(){
    this.labelColor = true;
  }
  public changeColorToBlue2(){
    this.labelColor2 = true;
  }

  public changeColorToDef(){
    this.labelColor = false;
  }
  public changeColorToDef2(){
    this.labelColor2 = false;
  }


  

  //API operations start

  public userData = {

    phoneNumber : "",

    email : "",
    
    password : ""

  }


  //true when login credentials are wrong

  public loginError = false;
  
  public userDataAfterLogin;
  

  public login(){

    this.userService.loginUser( this.userData ).subscribe( data =>{

      console.log(data);
      
      this.userDataAfterLogin = data;

      if( !this.userDataAfterLogin.isSuccess ){ // if user credentials server sets isSuccess value to true

        console.log("user login etmeyib");
  
  
        return;
  
      }
  
      localStorage.setItem( "userId" , this.userDataAfterLogin.output.id );
  
      localStorage.setItem( "accessToken" , this.userDataAfterLogin.output.accessToken );
  
      localStorage.setItem( "refreshToken" , this.userDataAfterLogin.output.refreshToken );
    },

    error => this.loginError = true
    
    )
  }
  
  
  
  ngOnInit() {
  }

}
