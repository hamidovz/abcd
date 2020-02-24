import { Component, OnInit } from '@angular/core';
import { HttpClient , HttpHeaders } from "@angular/common/http";
import { from } from 'rxjs';

@Component({
  selector: 'app-testing-api',
  templateUrl: './testing-api.component.html',
  styleUrls: ['./testing-api.component.css']
})
export class TestingApiComponent implements OnInit {

  constructor( public http: HttpClient) { }

  public url = "http://ziqzaq.az/api/vendor/create";
  public token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IkQ3QTFFQjIxLUZFRDMtNDM0OS1BRDQ5LURDQjk4MUUwRkEzOCIsInJvbGUiOiJBZG1pbiIsIm5iZiI6MTU4MTQ5Mzc5NiwiZXhwIjoxNTgxNTgwMTk2LCJpYXQiOjE1ODE0OTM3OTZ9.LDneSqJ2dvmPkpSJwgWEZqBv7MebopUaX4yZXHXYjx4";

  public options = {
    headers : new HttpHeaders( {"Authorization":this.token} )
  }

  public addImage(img){
    console.log("ok");
    // this.formData.Image = img;
  }


  public formData={
    TwitterAddress: "hghghg",
    InstagramAddress: "jughg",
    MapLatitude: "456456",
    Name: "ds222ww",
    FacebookAddress: "kikj",
    HomePhone:"0124789954", 
    AgencyName: " fghfgh",
    MapLongitude:"3453453",
    PhoneNumber: "64523325",
    AgencyEmail: "sdbgdfkj@gmail",
    Surname: "dfgdfgdfg",
    Password: "Alcn123!",
    Email: "fgq33f@gmial.com"
  }



  public sendData(form){
    console.log(form);
    var formdata =new FormData(form);
    var testData="";
    // for (let x in this.formData){
    //   formdata.append(x,this.formData[x]);
    //   // testData += x + "=" + this.formData[x]+"&";
    // }

    // testData = testData.slice(0,-1);
    // formdata.append("image",img.files[0]);


    // console.log(testData);
    this.http.post(this.url,formdata,this.options).subscribe(f=>console.log(f));
    // this.http.get("http://localhost:4000",this.options).subscribe(f=>console.log(f));
  }

  ngOnInit() {
  }

}
