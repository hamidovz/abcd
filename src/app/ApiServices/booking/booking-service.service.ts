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

  // public userToken = "Bearer ;

  public httpOptions;

  public createHeader(){

    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'access-control-allow-origin' : '*','Authorization':"Bearer " + localStorage.getItem("accessToken")}) 
    };

  }


  public createBooking(data) {
    
    this.createHeader();

    return this.http.post(this.api.booking,data,this.httpOptions);

  }

}
