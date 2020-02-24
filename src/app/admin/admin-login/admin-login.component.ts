import { Component, OnInit } from '@angular/core';
import { AdminService } from '../adminServices/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  public adminLoginData = {

    "phoneNumber": "",
    
    "password": ""

  }

  public adminDataOnSuccess; //retreived admin credentials (token,id) on successful admin login

  public adminLogin(){

    this.AdminService.adminLogin(this.adminLoginData).subscribe(data => {
      
      this.adminDataOnSuccess = data;

      this.adminDataOnSuccess = this.adminDataOnSuccess.output;

      localStorage.setItem("adminToken",this.adminDataOnSuccess.accessToken);

      this.route.navigate(["admin"]);

    });

  }


  constructor( 
    
    public AdminService: AdminService,

    public route : Router
    
    ) { }

  ngOnInit() {
  }

}
