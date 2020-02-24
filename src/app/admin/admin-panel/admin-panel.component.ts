import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  public mustAppear = false;

  //guard the admin route from the unauthorized attempts.

  //temporary method. will be changed in the future (after token validation is ready on the backend side)

  public isAuth(){

    var adminToken = localStorage.getItem("adminToken");

    if(!adminToken){
      this.route.navigate(["adminLogin"]);
    }

  }

  public getAllVendors(){

  }

  constructor( public route : Router ) { }

  ngOnInit() {

    this.isAuth();
    
  }

}
