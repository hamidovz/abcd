import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../ApiServices/user/user-service.service';


@Component({
  selector: 'user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {



  public modalOpen = false;


  public showModal(){
    this.modalOpen = true;
    document.body.style.overflow="hidden";

  }
  public closeModal(){
    this.modalOpen = false;
    document.body.style.overflow="visible";
  }

  public userAgreed = false;
  public agreedTerms(b){
    this.userAgreed = true;
    b.checked=true;
  }


  //user resgistration (api test)


  //formValidation

  public formFields = [ "name", "surname", "email", "phoneNumber", "password", "confirmPassword", "birthday", "gender" ];
  

  public hasError : any = {

    "name": false,

    "surname": false,

    "email": false,

    "phoneNumber": false,

    "password": false,

    "confirmPassword": false,

    "birthday": false,

    "gender": false

  }



  public validationMessages = {

    "name": "Boş buraxmaq olmaz",

    "surname": "Boş buraxmaq olmaz",

    "email": "Boş buraxmaq olmaz",

    "phoneNumber": "Boş buraxmaq olmaz",

    "password": "Boş buraxmaq olmaz",

    "confirmPassword": "Boş buraxmaq olmaz",

    "birthday": "Boş buraxmaq olmaz",

    "gender": "Boş buraxmaq olmaz"

  }

  public userData={

    "name": "",

    "surname": "",

    "email": "",

    "phoneNumber": "",

    "password": "",

    "confirmPassword": "",

    "birthday": "",

    "gender": ""

  }

  public validateForm(){

    var hasError = false;

    this.formFields.map( field => {

      if( this.userData[field].length < 1){
        
        this.hasError[field] = true;

        hasError = true;

      }

    })

    return hasError;

  }


  public resetValidation(){

    this.hasError  = {

      "name": false,
  
      "surname": false,
  
      "email": false,
  
      "phoneNumber": false,
  
      "password": false,
  
      "confirmPassword": false,
  
      "birthday": false,
  
      "gender": false
  
    }

  }



  public registerUser (birthday){

    this.userData.birthday = birthday;

    this.userService.registerUser(this.userData).subscribe( data =>{
      
      var retreivedData :any = data;

      if ( retreivedData.isSuccess)//if user registration is successfull

      this.registrationSuccessfull = true;
      
    });


  }

  //verify the code sent via sms

  public sendSms(){

    var phoneNumber = {

      phoneNumber : this.userData.phoneNumber

    }


    this.userService.sendSms(phoneNumber).subscribe( data => {
      
      var retreivedData : any = data;

      if( retreivedData.isSuccess ){

        this.codeSent = true;
        //
      }
      
    });

  }


  public verifyData = {

    phoneNumber : "",

    code : 0

  }

  public verifySmsCode(){

    this.verifyData.phoneNumber = this.userData.phoneNumber;

    this.verifyData.code = Number(this.verifyData.code);

    this.userService.verifySmsCode(this.verifyData).subscribe( data => {

      var retreivedData : any = data;


      if( retreivedData.isSuccess ){

        this.registrationSuccessfull = true;

      }

    } );

  }

  public userNumberCheckData : any = {
    "phoneNumber" : ""
  }

  public checkIfNumberExists(){

    this.resetValidation();


    if( !this.validateForm() ){

      //operations when form is valid

      console.log("ok");

      this.userNumberCheckData.phoneNumber = this.userData.phoneNumber;

      this.userService.checkIfNumberExists(this.userNumberCheckData).subscribe( data => console.log(data) );

    }

  }



  //for notification on registration

  public registrationSuccessfull = false;






  //for sms verification


  //a field will be shown to type the code which retreived by sms when this value will be true

  public codeSent = false; 



  // public notifyPanel = false; //notification panel will appear when value is true

  // public notifyMessage = "";

  // public notifyUser(message){

  //   this.notifyMessage = message;

  //   this.notifyPanel = true; //make notification panel visible

  //   this.disableNotifyPanel(); //dissapear notifyPanel after some time

  // }

  // public disableNotifyPanel(){

  //   setTimeout(_=>this.notifyPanel = false , 2000);

  // }



  constructor( public userService : UserServiceService ) { }

  ngOnInit() {
  }


}
