import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite-tours',
  templateUrl: './favorite-tours.component.html',
  styleUrls: ['./favorite-tours.component.css']
})
export class FavoriteToursComponent implements OnInit {
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
