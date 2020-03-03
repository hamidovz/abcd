import { Component, OnInit, ElementRef } from '@angular/core';
import { TransferServiceService } from '../ApiServices/transferService/transfer-service.service';
import { FaLayersTextBaseComponent } from '@fortawesome/angular-fontawesome/layers/layers-text-base.component';
import { DateTimeAdapter, OWL_DATE_TIME_LOCALE, OwlDateTimeIntl } from 'ng-pick-datetime';
import { NativeDateTimeAdapter } from 'ng-pick-datetime/date-time/adapter/native-date-time-adapter.class';
import { Platform } from '@angular/cdk/platform';



@Component({
  selector: 'transfer-page',
  templateUrl: './transfer-page.component.html',
  styleUrls: ['./transfer-page.component.css'],
  providers: [
    // The locale would typically be provided on the root module of your application. We do it at
    // the component level here, due to limitations of our example generation script.
    {provide: OWL_DATE_TIME_LOCALE, useValue: 'tr'},
    {provide: DateTimeAdapter, useClass: NativeDateTimeAdapter, deps: [OWL_DATE_TIME_LOCALE,Platform]},
]
})
export class TransferPageComponent implements OnInit {

  constructor( public transferService: TransferServiceService ) { }

  // make icon ( vehicle type icons ) active on the transfer service page
  // when clicked on

  public currentIcon = "ekonom";

  public changeIcon( iconType , carType ){

    this.currentIcon = iconType;

    this.setCarType(carType);

  }

  public carouselStep = { 

    left : 100,
    right : -100

  }

  public carouselCurrentPosition = 0;

  public nextStep(direction , carousel){

    var calculatedValue = this.carouselStep[direction];

    this.carouselCurrentPosition += calculatedValue;

    var step = Math.abs(this.carouselCurrentPosition / 100);
    
    if( direction == "right" && step < 3 && this.validateForm(step)){

      this.carouselCurrentPosition -= calculatedValue;
      
      return;
    }

    //if currentStep is sms verification step

    if( step == 3){

      this.registerTransfer();


    }

    carousel.style.transform = "translateX(" + this.carouselCurrentPosition + "%)";

  }

  //when we click the button(nextStep) color change in Transfer Step side

  public stepTwo = false;

  public stepThree = false;

  public becomeBlue(){

    if( this.validateForm(1)){
      return;
    }

    this.stepTwo = true;

  }

  public becomeBlue2(){

    if( this.validateForm(2)){
      return;
    }

    this.stepThree = true;

  }
  
  public becomeGrey(){

    this.stepTwo = false;

  }



  // current time
  
  public getCurrentTime(){

    var time = new Date();

    var timeFormatted = time.getFullYear() + "-" + time.getMonth() + "-" + time.getDate();

    return timeFormatted;

  }

  // Transfer registration (api)

  public transferData = {

    "pickupLocation": "",

    "destination": "",

    "pickUpTime": "",

    "flightCode": "",

    "passengerNumber": "",

    "luggageWeight": "",

    "verified": false,

    "name": "",

    "surname": "",

    "phone": "",

    "email": "",

    "transferStatus": 0,


    "carTypeid": 5

  }

  public carTypes = {
    1: "Ekonom Sedan",
    2: "Biznes Sedan",
    3: "MiniBus"
  }

  public setCarType( carType ){
    this.transferData.carTypeid = Number(carType);
  }

  public registerTransfer () {

    this.transferData.phone = this.transferData.phone.toString();

    this.transferService.registerTransfer(this.transferData).subscribe( data => {
      this.sendSms(this.transferData.phone);
    });

  }

  public sendSms(PhoneNumber){

    var number = {
      phoneNumber : PhoneNumber
    }

    this.transferService.sendSms(number).subscribe( data =>{

      var retreived : any = data;

      retreived = retreived.output;

      //if message was sent to the phoneNumber
      if( retreived.isSuccess){
        console.log(retreived);

      }
    });

  }

  public verifySmsCode(code , carousel){

    console.log(carousel);

    var verifyData = {

      "phoneNumber": this.transferData.phone,

      "code": code

    }

    this.transferService.verifySmsCode(verifyData).subscribe( data => {

      var retreived : any = data;

      if( retreived.isSuccess ){

        this.nextStep("right" , carousel);

      }

    });

  }




  //form validation starts


  public validationRules = {

    1 : ["pickupLocation" , "destination" , "pickUpTime" , "passengerNumber" , "passengerNumber","luggageWeight"],

    2 : ["name" , "surname" , "phone" , "email"],



}

public validationMessages = {

  "pickupLocation": "Boş buraxmaq olmaz",

  "destination": "Boş buraxmaq olmaz",

  "pickUpTime": "Boş buraxmaq olmaz",

  "passengerNumber": "Boş buraxmaq olmaz",

  "luggageWeight": "Boş buraxmaq olmaz",

  "verified": "Boş buraxmaq olmaz",

  "name": "Boş buraxmaq olmaz",

  "surname": "Boş buraxmaq olmaz",

  "phone": "Boş buraxmaq olmaz",

  "email": "Boş buraxmaq olmaz",

}


//make opacity 1 of validation error message container of specific input field,
//according the values below

//e.g. if Name is true then a error message will be show (opacity will be 1) below the name input field

public hasValidationError = {

  "pickupLocation": false,

  "destination": false,

  "pickUpTime": false,

  "passengerNumber": false,

  "luggageWeight": false,

  "verified": false,

  "name": false,

  "surname": false,

  "phone": false,

  "email": false

}



public resetValidationMessages(){

    this.validationMessages = {
      
      "pickupLocation": "",

      "destination": "",
    
      "pickUpTime": "",
    
    
      "passengerNumber": "",
    
      "luggageWeight": "",
    
      "verified": "",
    
      "name": "",
    
      "surname": "",
    
      "phone": "",
    
      "email": "",
            
    }



    this.hasValidationError = {

      "pickupLocation": false,

      "destination": false,
    
      "pickUpTime": false,
    
    
      "passengerNumber": false,
    
      "luggageWeight": false,
    
      "verified": false,
    
      "name": false,
    
      "surname": false,
    
      "phone": false,
    
      "email": false
    
    }
}


public validateForm(step){

    console.log(step);

    this.resetValidationMessages();

    var hasError = false;

    this.validationRules[step].map( data =>{

            //if input field is empty (length < 1)
            
            if (this.transferData[data].length < 1){

                    console.log(this.transferData[data].length);

                    this.validationMessages[data] ="bos buraxmaq olmaz";

                    this.hasValidationError[data] = true;

                    hasError = true;
            }
            
    })

    return hasError;
    

}


public addCountryCode(inputEl){

  // inputEl.value = "994";

  // console.log(this.userData.phoneNumber);

  // return;



  if(inputEl.value.length < 3){
    inputEl.value="994";
  }



  if(inputEl.value.slice(0,3) != "994" ){


    inputEl.value = "994" + inputEl.value.slice(3);

  }


  console.log(this.transferData.phone);


  
}


  ngOnInit() {
  }

}
