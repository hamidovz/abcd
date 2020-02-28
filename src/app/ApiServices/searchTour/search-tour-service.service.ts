import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SearchTourServiceService {

  public apiBase = environment.apiEndpoint;

  public apiUrl = `${this.apiBase}/tour/search`;

  public searched = new Subject();

  public searchResult = new Subject();

  public toggleSearch(){
    this.searched.next(true);
  }

  public searchTour(searchData){

    console.log(searchData);

    var search = {
      name : searchData[0],
      departureTime : searchData[1],
      arrivalTime : searchData[2]
    }

    console.log(search);

    this.http.post(this.apiUrl , search ).subscribe(data => {

      console.log(data);

      var searchedData : any = data;

      searchData = searchedData.output;

      // console.log(searchData);

      this.searchResult.next(searchData);

      this.searched.next(true);

    });

  }



  constructor( public http : HttpClient ) { }
}
