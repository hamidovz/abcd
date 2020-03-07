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


  public formFields = [ "name", "surname", "email", "number", "description" ];
  

  public hasError : any = {

    "name": false,

    "surname": false,

    "email": false,

    "number": false,

    "description": false

  }



  public validationMessages = {

    "name": "Boş buraxmaq olmaz",

    "surname": "Boş buraxmaq olmaz",

    "email": "Boş buraxmaq olmaz",

    "number": "Boş buraxmaq olmaz",

    "description": "Boş buraxmaq olmaz"
  }


  public validationLength = {

    name : { min : 3, max : 20 },
    
    surname : { min : 3, max : 20 },

    email : { min : 3, max : 20 },
    
    description : { min : 3, max : 20 },
    
    number : { min : 3, max : 20 },

}


  public validateForm(){

    this.resetValidation();

    var hasError = false;

    this.formFields.map( field => {

      if( this.message[field].length < 1){
        
        this.hasError[field] = true;

        hasError = true;

      }

      if( (this.message[field].length && this.message[field].length < this.validationLength[field].min) || (this.message[field].length && this.message[field].length > this.validationLength[field].max) ){

        console.log(this.validationMessages[field]);

                        
        this.validationMessages[field] ="uzunluq 3-20 arası olmalıdır";

        this.hasError[field] = true;

        hasError = true;

        console.log(this.hasError[field]);
        
      }

    })
    

    return hasError;

  }


  public resetValidation(){

    this.hasError  = {

      "name": false,

      "surname": false,
  
      "email": false,
  
      "number": false,
  
      "description": false
  
    }

  }


  ngOnInit() { }

}
