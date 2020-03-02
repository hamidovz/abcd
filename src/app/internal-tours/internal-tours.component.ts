import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TourServiceService } from '../ApiServices/tour/tour-service.service';
import { SearchTourServiceService } from '../ApiServices/searchTour/search-tour-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'internal-tours',
  templateUrl: './internal-tours.component.html',
  styleUrls: ['./internal-tours.component.css']
})

export class InternalToursComponent implements OnInit {

  public defaultValue = "Turları sırala";

  public changeOption(sent) {

    var sentValue = sent.getAttribute("value");

    this.defaultValue = sentValue;

  }

  public allOptionsHidden = true;

  public showAllOptions() {

    this.allOptionsHidden = !this.allOptionsHidden;

  }


  // API operations starts

  public localTours: any = {

    output: []

  };

  public getTours() {

    this.TourService.getTour(2).subscribe(data => this.localTours = data);

  }




  //the search result section will be rendered conditionally,
  //according the value of the variable below

  public searched: any = false;

  public toggleSearched() {

    this.searchService.searched.subscribe(data => {

      this.searched = data;

      console.log(data);

    });

  }

  getSearchResults() {

    this.searchService.searchResult.subscribe(data => {

      this.searchedTour = data;
      console.log(this.searchedTour);

    });

  }

  public searchedTour: any = [];





  //load more tours when 'Daha cox' button clicked

  public tourLimit = 20;

  public loadMore() {
    //
  }





  //share button operations


  public shareEnabledId;

  public openSharingPanel(id) {
    if(id == this.shareEnabledId){
      this.shareEnabledId = 0;
      return;
    }

    this.shareEnabledId = id;
    
  }



  //make tour favorite


  public favoriteTourData = {

    "userId": "",
    "tourId": 0,
    "status": true

  }

  public makeTourFavorite(tourId, clickedElement) {

    this.favoriteTourData.tourId = tourId;

    this.favoriteTourData.userId = localStorage.getItem("userId");

    this.TourService.makeTourFavorite(this.favoriteTourData).subscribe(data => {

      var retreived: any = data;

      if (retreived.isSuccess) {

        clickedElement.style.color = "#FFCA00";
      }
    })

    //
  }


  //check if clicked on tour itself or the icons (heart,share icons) on the tourCard

  //navigate to the corresponding route if click on the tourCard it self

  //or make the current tour favorite if clicked on the heart

  public onTourClick($event, route) {

    var clickedTourId;

    var routeId;

    var clickedElement = $event.target;

    var clickedElementParent = clickedElement.parentElement.parentElement;

    clickedTourId = clickedElementParent.getAttribute("tourId");

    routeId = clickedElement.getAttribute("tourId");

    if (clickedElementParent.tagName == "FA-ICON" && clickedElementParent.parentElement.id == "heart") { //if user clicked on of the icons (heart ot share )


      this.makeTourFavorite(clickedTourId, clickedElement);

    }



    //if user clicked on the card itself

    if (clickedElement.classList.contains("layer")) {

      var formattedRoute = route + "/" + routeId;

      this.router.navigate([formattedRoute]);
    }



    //
  }

  constructor(

    public http: HttpClient,

    public TourService: TourServiceService,

    public searchService: SearchTourServiceService,

    public router: Router

  ) { }

  ngOnInit() {

    this.getTours();

    this.toggleSearched();

    this.getSearchResults();

  }

}
