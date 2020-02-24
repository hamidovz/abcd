import { Component, OnInit } from '@angular/core';
import { VendorServiceService } from '../ApiServices/vendor/vendor-service.service';
import { HttpClient , HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: 'vendor-dashboard',
  templateUrl: './vendor-dashboard.component.html',
  styleUrls: ['./vendor-dashboard.component.css']
})
export class VendorDashboardComponent implements OnInit {

  //redirect vendor to the login page , if not authenticated

  public handleAuth(){

    //backend-de access token validation yazilacaq.
    //vendor id ve token gonderilecek ugurlu olarsa auth edilib eks halda auth edilmeyib
    
    var token = localStorage.getItem("vendorToken");

    if(!token){

      this.route.navigate(["vendorLogin"]);
      
    }
  }

  constructor( 
    
    public VendorService : VendorServiceService,

    public http : HttpClient,

    public route : Router

     ) { }

  ngOnInit() {

    this.handleAuth();
  }

}
