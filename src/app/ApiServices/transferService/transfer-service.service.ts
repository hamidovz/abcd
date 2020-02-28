import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class TransferServiceService {

  constructor( public http: HttpClient ) { }

  public apiBase = environment.apiEndpoint;

  public api = {
    transfer: `${this.apiBase}/transfer`,

    sendSms : `${this.apiBase}/transfer/sendPhoneNumber`,

    verifySmsCode : `${this.apiBase}/transfer/confirmPhoneNumbe`
  }

  public adminToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IkQ3QTFFQjIxLUZFRDMtNDM0OS1BRDQ5LURDQjk4MUUwRkEzOCIsInJvbGUiOiJBZG1pbiIsIm5iZiI6MTU4MTU4OTIyNCwiZXhwIjoxNTgxNjc1NjI0LCJpYXQiOjE1ODE1ODkyMjR9.0v-t7nR-GVqizABlAlTEGSkZx-nIIIP1nwn4YzXTZ7I";
  public userToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjAxZGUwZDJmLWNiNmEtNDM2Mi1iN2I0LTE5M2ExYmYzNzMzZCIsInJvbGUiOiJVc2VyIiwibmJmIjoxNTgxNTkzNDM1LCJleHAiOjE1ODE2Nzk4MzUsImlhdCI6MTU4MTU5MzQzNX0.l12OZgR1oeQ-vg3o3dxWcY12r1BTkwz3jM4ZYWWq7AE";
  httpOptions = {
    headers: new HttpHeaders({'Content-type':'application/json','access-control-allow-origin' : '*'})
  };

  public registerTransfer(data){
    
    return this.http.post( this.api.transfer,data,this.httpOptions);

  }

  public sendSms( phoneNumber ){
    
    return this.http.post( this.api.sendSms , phoneNumber);
  }
  
  public verifySmsCode( verifyData ){

    return this.http.post( this.api.verifySmsCode , verifyData );
  }
}
