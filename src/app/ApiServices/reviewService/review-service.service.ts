import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class ReviewServiceService {

  constructor( public http: HttpClient ) { }

  public apiBase = environment.apiEndpoint;

  public api = {
    comment: `${this.apiBase}/review`
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'access-control-allow-origin' : '*'})
  };

  public postComment(data) {
    
    console.log(data);

    return this.http.post(this.api.comment,data);

  }

}
