import { Component, OnInit, ElementRef } from '@angular/core';
import { TransferServiceService } from '../ApiServices/transferService/transfer-service.service';

@Component({
  selector: 'transfer-page',
  templateUrl: './transfer-page.component.html',
  styleUrls: ['./transfer-page.component.css']
})
export class TransferPageComponent implements OnInit {

  constructor( public transferService: TransferServiceService ) { }

  // make icon ( vehicle type icons ) active on the transfer service page
  // when clicked on

  public currentIcon = "";

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

    carousel.style.transform = "translateX(" + this.carouselCurrentPosition + "%)";

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

    "luggageWeight": true,

    "verified": true,

    "name": "",

    "surname": "",

    "phone": "",

    "email": "",

    "transferStatus": 0,

    "createdDate": this.getCurrentTime(),

    "updateDate": this.getCurrentTime(),

    "carTypeid": ""

  }

  public carTypes = {
    1: "Ekonom Sedan",
    2: "Biznes Sedan",
    3: "MiniBus"
  }

  public setCarType( carType ){
    this.transferData.carTypeid = carType;
  }

  public registerTransfer () {

    this.transferService.registerTransfer(this.transferData).subscribe( data => console.log(data));

  }

  //this for test
  // public test(){
  //   console.log(this.transferData);
  // }


  ngOnInit() {
  }

}
