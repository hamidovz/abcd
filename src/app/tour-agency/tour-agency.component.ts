import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tour-agency',
  templateUrl: './tour-agency.component.html',
  styleUrls: ['./tour-agency.component.css']
})
export class TourAgencyComponent implements OnInit {

  public lat = 30;

  public lng = 50;

  constructor() { }

  ngOnInit() {
  }

}
