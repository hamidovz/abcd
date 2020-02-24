import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'booked-tours',
  templateUrl: './booked-tours.component.html',
  styleUrls: ['./booked-tours.component.css']
})
export class BookedToursComponent implements OnInit {

  public defaultValue = "Turları sırala";

  public changeOption(sent){
    var sentValue = sent.getAttribute("value");
    this.defaultValue = sentValue;
  }

  public allOptionsHidden = true;

  public showAllOptions() {
    this.allOptionsHidden =  !this.allOptionsHidden;
  }

  constructor() { }

  ngOnInit() {
  }

}
