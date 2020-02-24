import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ReviewServiceService {

  constructor( public http: HttpClient ) { }

  public api = {
    comment: "http://ziqzaq.az/api/review"
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'access-control-allow-origin' : '*'})
  };

  public postComment(data) {
    
    console.log(data);

    return this.http.post(this.api.comment,data);

  }

}
