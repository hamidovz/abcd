import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TourServiceService } from '../ApiServices/tour/tour-service.service';
import { BookingServiceService } from '../ApiServices/booking/booking-service.service';
import { ReviewServiceService } from '../ApiServices/reviewService/review-service.service';
 
@Component({
  selector: 'single-tour-page',
  templateUrl: './single-tour-page.component.html',
  styleUrls: ['./single-tour-page.component.css']
})

export class SingleTourPageComponent implements OnInit {


  public passengerCount = {
    'adults': 0,
    'children': 0,
    'infants': 0
  };

  public changeCount(passengerType , operation = 1){
    
    this.passengerCount[passengerType] += operation;

    if(this.passengerCount[passengerType] < 0){
      this.passengerCount[passengerType] = 0;
    }

    this.bookingData[passengerType] =  this.passengerCount[passengerType];

  }

  
  // all( infants, adults, children )

  public sumOfPrice;

  public changePrice(){

    var adultPrice = this.singleTour["adultPrice"] * this.passengerCount.adults;

    var childrenPrice = this.singleTour["childPrice"] * this.passengerCount.children;

    var infantsPrice = this.singleTour["infantPrice"] * this.passengerCount.infants;

    this.sumOfPrice = adultPrice + childrenPrice + infantsPrice;

  }

  //carousel start position ( transform:translateX(0) )

  public carouselPosition = 0;

  public previousCarouselPosition = 0;

  //carousel photos

 

  
  //carousel maximum increment value (found by calculating amount of the cards in the carousel)

  //will be calculated dynamically in the future

  public carouselLimit = -500;

  public prevCarouselLimit = 0;


  //carousel increment/decreament value (translateX will be increased/decreased by 51 percent everytime)

  public carouselStep = {

    right: -100,

    left: 100

  }


  public carouselSlide(direction,carousel){

    var calculatedValue = this.carouselStep[direction];
    
    this.carouselPosition += calculatedValue;

    if( this.carouselPosition < this.carouselLimit || this.carouselPosition > 0 ){

      this.carouselPosition -= calculatedValue;

    }

    carousel.style.transform="translateX(" + this.carouselPosition + "%)";

  }

  public previousCarouselSlide(){

    this.previousCarouselPosition += -25;

    if( this.previousCarouselPosition < this.prevCarouselLimit || this.previousCarouselPosition > 0 ){

      this.previousCarouselPosition -= -25;

    }

    setInterval(this.previousCarouselSlide , 10000);

  }



  public modalIsOpen = false;

  public openModal(){
    this.modalIsOpen = true;
  }

  public closeModal(){
    this.modalIsOpen = false;
  }

  public onSubmit($event){
    event.preventDefault();
  }

  lat = 40.730610;
  lng = -73.935242;



  // API operations starts
   
  public singleTour : any = {

    "name" : ""

  }

  public getSingleTour(){

    var id = this.route.snapshot.paramMap.get('id'); //get value of 'id' parameter on the route ( '/1' , '/2', etc.)

    this.TourService.getSingleTour( id ).subscribe( data => {

      this.singleTour = data;

      this.singleTour = this.singleTour.output;

      this.carouselLimit = -(this.singleTour.photos.length - 1) * 100;

      this.prevCarouselLimit = -(this.singleTour.previousPhotos.length - 1) * 25;
      
      console.log(this.singleTour);

      // assign tour id to 'id' key in the bookingData variable, when tour data fully retreived
      
      this.bookingData["tourId"] = this.singleTour.id;

      this.commentData["tourId"] = this.singleTour.id;
      
    });

  }

  public getCurrentTime(){

    var time = new Date();

    var timeFormatted = time.getFullYear() + "-" + time.getMonth() + "-" + time.getDate();

    return timeFormatted;

  }

  // post booking 
  
  public bookingData = {

    "createdDate": this.getCurrentTime(),

    "updateDate": this.getCurrentTime(),

    "adults": "",

    "children": "",

    "infants": "",

    "bookingStatus":"0",

    "userId": localStorage.getItem("userId") ? localStorage.getItem("userId") : "",

    "tourId": ""

  }

  public postBooking() {

    // we'll make notify user to login in order to post a comment

    if(this.bookingData.userId.length < 1){
      return;
    }

    this.BookingService.createBooking(this.bookingData).subscribe(data => console.log(data));

  }


  // post comment

  public commentData = {

    "text": "",

    "starValue": "",

    "createdDate": this.getCurrentTime(),

    "tourId": "",

    "userId": localStorage.getItem("userId") ? localStorage.getItem("userId") : ""

  }

  public createComment() {

    // we'll make notify user to login in order to post a comment

    if(this.commentData.userId.length < 1){
      return;
    }

    this.ReviewService.postComment(this.commentData).subscribe(data => console.log(data));

  }


  //remove 'T' symbol form retreived date
  // eg: 02.10.2020T00:01:00 => 02.10.2020

  public formatData(date){

    var data = date.split("T");

    data = data[0];
    
    return data;
  }

  //calculate comment star

  public commentStar(n){

    console.log(n);

    this.commentData.starValue = n;

  }



  //make tour favorite

  public favoriteTourData = {

    "userId": "",
    "tourId": 0,
    "status": true
  
}


  public makeTourFavorite(tourId , clickedElement ){

    var heartElement = clickedElement.target.parentElement.parentElement;

    if(heartElement.tagName != "FA-ICON"){
      return;
    }

    this.favoriteTourData.tourId = tourId;
  
    this.favoriteTourData.userId = localStorage.getItem("userId");
  
    this.TourService.makeTourFavorite(this.favoriteTourData).subscribe( data => {
  
      var retreived : any = data;
  
      if( retreived.isSuccess ){
  
        heartElement.style.color = "#FFCA00";
      }
    })
      
    //
  }

  // API operations ends

  constructor( 

    public route : ActivatedRoute,

    public TourService : TourServiceService,

    public BookingService : BookingServiceService,

    public ReviewService : ReviewServiceService

    ) { }




  ngOnInit() {

    this.getSingleTour();

    this.previousCarouselSlide();

  }

}
