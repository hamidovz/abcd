import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TourServiceService {

  public apiUrl = {
    tour : "http://ziqzaq.az/api/tour"
  }


  public getTour(type){

    return this.http.get(`${this.apiUrl.tour}?type=${type}`);

  }

  public getSingleTour(id){

    return this.http.get(this.apiUrl.tour + `/${id}`);
    
  }

  constructor( public http : HttpClient ) { }
}
