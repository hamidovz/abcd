import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vendor-reservation-page',
  templateUrl: './vendor-reservation-page.component.html',
  styleUrls: ['./vendor-reservation-page.component.css']
})
export class VendorReservationPageComponent implements OnInit {

  public reservationConfirmOpen = false;

  public confirmSectionOpen(){
    this.reservationConfirmOpen = true;
  }

  public confirmSectionClose(){
    this.reservationConfirmOpen = false;
  }


  constructor() { }

  ngOnInit() {
  }

}
