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

    this.contactUsService.contactPost(this.message).subscribe(data => console.log(data));

  }

  //this for test
  // public test() {

  //   console.log(this.message);

  // }


  ngOnInit() { }

}
