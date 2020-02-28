import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TourServiceService {
  

  public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'access-control-allow-origin' : '*','Authorization': "Bearer " + localStorage.getItem("accessToken")}) 
  };

  public apiBase = environment.apiEndpoint;

  public apiUrl = {
    tour : `${this.apiBase}/tour`,

    tourFavorite : `${this.apiBase}/favorite`
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
