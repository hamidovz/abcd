import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TourServiceService {
  

  public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'access-control-allow-origin' : '*','Authorization': "Bearer " + localStorage.getItem("accessToken")}) 
  };

  public apiUrl = {
    tour : "http://ziqzaq.az/api/tour",

    tourFavorite : "http://ziqzaq.az/api/favorite"
  }


  public getTour(type){

    return this.http.get(`${this.apiUrl.tour}?type=${type}`);

  }

  public getSingleTour(id){

    return this.http.get(this.apiUrl.tour + `/${id}`);
    
  }


  public makeTourFavorite(tourData){
    
    return this.http.post( this.apiUrl.tourFavorite , tourData , this.httpOptions );
  }

  constructor( public http : HttpClient ) { }
}
