import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class BookingServiceService {

  constructor( public http: HttpClient ) { }

  public apiBase = environment.apiEndpoint;

  public api = {
    booking: `${this.apiBase}/booking`
  }

  public userToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjAxZGUwZDJmLWNiNmEtNDM2Mi1iN2I0LTE5M2ExYmYzNzMzZCIsInJvbGUiOiJVc2VyIiwibmJmIjoxNTgxNjc3NDg2LCJleHAiOjE1ODE3NjM4ODYsImlhdCI6MTU4MTY3NzQ4Nn0.K6NbspPbRMO9q5Q8fIvxaywNLy6sCogLlI1EwmxPOnc";  

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'access-control-allow-origin' : '*','Authorization':this.userToken}) 
  };

  public createBooking(data) {
    
    console.log(data);

    return this.http.post(this.api.booking,data,this.httpOptions);

  }

}
