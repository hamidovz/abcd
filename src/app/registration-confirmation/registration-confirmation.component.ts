import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'registration-confirmation',
  templateUrl: './registration-confirmation.component.html',
  styleUrls: ['./registration-confirmation.component.css']
})
export class RegistrationConfirmationComponent implements OnInit {
  public registerSuccessful = false;

  public showDialog(){
    this.registerSuccessful = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
