import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vendor-past-tours',
  templateUrl: './vendor-past-tours.component.html',
  styleUrls: ['./vendor-past-tours.component.css']
})
export class VendorPastToursComponent implements OnInit {
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
