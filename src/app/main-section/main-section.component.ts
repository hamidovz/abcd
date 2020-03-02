import { Component, OnInit } from '@angular/core';
import { TourServiceService } from '../ApiServices/tour/tour-service.service';
import { SearchTourServiceService } from '../ApiServices/searchTour/search-tour-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css']
})
export class MainSectionComponent implements OnInit {

  //the search result section will be rendered conditionally,
  //according the value of the variable below

  public searched : any = false;

  public toggleSearched(){

    this.searchService.searched.subscribe( data => {
      
      this.searched = data;

      
    });

  }

  getSearchResults(){

    this.searchService.searchResult.subscribe(data => {
      
      this.searchedTour = data;
    
    });

  }

  public searchedTour : any = [];



  //carousel start position ( transform:translateX(0) )

  public carouselPosition = 0;

  
  //carousel maximum increment value (found by calculating amount of the cards in the carousel)

  //will be calculated dynamically in the future

  public carouselLimit = -102;


  //carousel increment/decreament value (translateX will be increased/decreased by 51 percent everytime)

  public carouselStep = {

    right: -51,

    left: 51

  }


  public carouselSlide(direction,carousel){

    var calculatedValue = this.carouselStep[direction];
    
    this.carouselPosition += calculatedValue;

    if( this.carouselPosition < this.carouselLimit || this.carouselPosition > 0 ){

      this.carouselPosition -= calculatedValue;

    }

    carousel.style.transform="translateX(" + this.carouselPosition + "%)";

  }


  //share button operations


  public shareSection = "";
  public shareEnabledId = 0;

  public openSharingPanel(id , retreivedSection){

    

    if(id == this.shareEnabledId && retreivedSection == this.shareSection){
      this.shareEnabledId = 0;
      return;
    }

    this.shareEnabledId = id;

    this.shareSection = retreivedSection
    
  }


  // API operations starts


  public localTours : any = {

    output : []

  };

  public foreignTours : any = {

    output : []

  };

  public vipTours : any = {

    output : []
    
  };

  public getTours(){

    this.TourService.getTour(2).subscribe( data => this.localTours = data );
    
    this.TourService.getTour(3).subscribe( data => this.foreignTours = data);

    this.TourService.getTour(3).subscribe( data => {
      
      this.vipTours = data;


      var limit = this.vipTours.output.length - 2 ;


      this.carouselLimit = -limit * 51;

      
    });


  }

  //remove '/' symbol form retreived date and replace it with '-' symbol
  // eg: 02/10/2020 => 02-10-2020

  public formatData(date){

    var data = date.replace(/\//g,"-");
    
    return data;
  }


  //make tour favorite and load favorited tours on load

  public favoriteTour : any ;


  // public loadFavoriteTours(){
  //   this.TourService
  // }



  public favoriteTourData = {

      "userId": "",
      "tourId": 0,
      "status": true
    
  }

  public makeTourFavorite(tourId , clickedElement ){

    this.favoriteTourData.tourId = tourId;

    this.favoriteTourData.userId = localStorage.getItem("userId");

    this.TourService.makeTourFavorite(this.favoriteTourData).subscribe( data => {

      var retreived : any = data;


      if( retreived.isSuccess ){

        clickedElement.style.color = "#FFCA00";
      }
    })
      
    //
  }


  //check if clicked on tour itself or the icons (heart,share icons) on the tourCard

  //navigate to the corresponding route if click on the tourCard it self

  //or make the current tour favorite if clicked on the heart

  public onTourClick($event , route){

    var clickedTourId;

    var routeId;

    var clickedElement = $event.target;

    var clickedElementParent = clickedElement.parentElement.parentElement;
    
    clickedTourId = clickedElementParent.getAttribute("tourId");

    routeId = clickedElement.getAttribute("tourId");

    if(clickedElementParent.tagName == "FA-ICON" && clickedElementParent.parentElement.id == "heart"){ //if user clicked on of the icons (heart ot share )
      

      this.makeTourFavorite(clickedTourId , clickedElement);

    }




    //if user clicked on the card itself

    if( clickedElement.classList.contains("layer") ){

      var formattedRoute = route + "/" + routeId;

      this.router.navigate([formattedRoute]);
    } 



    //
  }

  // API operations ends

  constructor(
    
    public TourService : TourServiceService,

    public searchService : SearchTourServiceService,

    public router : Router
    
    ) { }

  ngOnInit() {
    this.getTours();

    this.toggleSearched();

    this.getSearchResults();
  }

}
