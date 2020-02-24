import { Component, OnInit } from '@angular/core';
import { ContactUsServiceService } from '../ApiServices/contactUsService/contact-us-service.service';

@Component({
  selector: 'contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})

export class ContactUsComponent implements OnInit {

  constructor( public contactUsService: ContactUsServiceService ) { }

  // Latitude and Longitude for map .. 

  public lat = 40.3830921;
  public lng = 49.8693493;


  // Contact Us (api) data 

  public message = {

    "name": "",

    "surname": "",

    "email": "",

    "number": "",

    "description": ""

  }


  public sendMessage() {

    if( this.validateForm() ){
      return;
    }

    this.contactUsService.contactPost(this.message).subscribe(data => console.log(data));

  }

  


  //form validation


  public formFields = [ "name", "surname", "email", "phoneNumber", "description" ];
  

  public hasError : any = {

    "name": false,

    "surname": false,

    "email": false,

    "phoneNumber": false,

    "description": false

  }



  public validationMessages = {

    "name": "Boş buraxmaq olmaz",

    "surname": "Boş buraxmaq olmaz",

    "email": "Boş buraxmaq olmaz",

    "phoneNumber": "Boş buraxmaq olmaz",

    "description": "Boş buraxmaq olmaz"
  }

  public contactData ={

    "name": "",

    "surname": "",

    "email": "",

    "phoneNumber": "",

    "description": ""

  }

  public validateForm(){

    var hasError = false;

    this.formFields.map( field => {

      if( this.contactData[field].length < 1){
        
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


  ngOnInit() { }

}
