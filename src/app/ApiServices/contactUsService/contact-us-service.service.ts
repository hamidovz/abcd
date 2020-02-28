import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { from } from 'rxjs';
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class ContactUsServiceService {

  constructor( public http: HttpClient ) { }

  public apiBase = environment.apiEndpoint;

  public api = {
    message: `${this.apiBase}/contactUs`
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'access-control-allow-origin' : '*'})
  };

  public contactPost(data) {
    
    console.log(data);

    return this.http.post(this.api.message,data);

  }

}
