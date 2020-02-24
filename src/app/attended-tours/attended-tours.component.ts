import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'attended-tours',
  templateUrl: './attended-tours.component.html',
  styleUrls: ['./attended-tours.component.css']
})
export class AttendedToursComponent implements OnInit {
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
