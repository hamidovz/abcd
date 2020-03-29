import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserServiceService } from '../ApiServices/user/user-service.service';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {


  //edited data will be stored in the variable below and will be sent to the server to update user info

  public editData = {

    name : "",
    surname : "",
    phoneNumber : "",
    email : "",
    newPassword: "",
    currentPassword : "1234Asdf@",
    birthDate : "",
    gender : "0"

  }


  public genders = {

    0 : "kişi",

    1 : "qadın"

  }
  //add data to the 'editData' variable when user types on the specific field

  public addNewData(value , field){

    this.editData[field] = value;
  }

  

  //send data to the server
  public sendUpdatedData(){

    this.validateForm();

    // this.editData.currentPassword = this.editData.newPassword;

    this.userService.sendUpdatedData(this.editData).subscribe( data => console.log(data) );
  }

  //error validation

  public formFields = [ "email", "phoneNumber", "newPassword"];
  

  public hasError : any = {

    "email": false,

    "phoneNumber": false,

    "newPassword": false,


  }




 

  public validateForm(){

    var hasError = false;

    this.formFields.map( field => {

      if( this.editData[field].length < 1){
        
        this.hasError[field] = true;

        hasError = true;

      }

    })

    return hasError;

  }


  public resetValidation(){

    this.hasError  = {
  
      "email": false,
  
      "phoneNumber": false,
  
      "newPassword": false,
  
  
    }

  }

  //make specific field editable according the values below

  public isEditable = {

    phoneNumber : false,

    email : false,

    password : false

  }


  public makeEditable(field){

    this.isEditable[field] = true;
  }


  public disableEdit(field){

    console.log(this.editData);
    this.isEditable[field] = false;

    this.sendUpdatedData();

  }

  public openSnack(message:string){
    this.snackBar.open(message,null,{duration:2000});
  }
  constructor( 
    
    public snackBar : MatSnackBar,

    public userService : UserServiceService
    
    ) { }

  ngOnInit() {

    this.userService.getUserById(localStorage.getItem("userId")).subscribe(data => {
      
      var retreived : any = data;

      retreived = retreived.output;

      this.editData.name = retreived.name;
      this.editData.surname = retreived.surname;
      this.editData.email = retreived.email;
      this.editData.phoneNumber = retreived.phoneNumber;
      this.editData.birthDate = retreived.birthday;
      this.editData.gender = this.genders[retreived.gender];


    })
  }

}
