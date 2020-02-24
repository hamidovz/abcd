import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vendor-active-tours',
  templateUrl: './vendor-active-tours.component.html',
  styleUrls: ['./vendor-active-tours.component.css']
})
export class VendorActiveToursComponent implements OnInit {
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
