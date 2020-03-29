import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TourServiceService } from '../ApiServices/tour/tour-service.service';
import { BookingServiceService } from '../ApiServices/booking/booking-service.service';
import { ReviewServiceService } from '../ApiServices/reviewService/review-service.service';
import { UserServiceService } from '../ApiServices/user/user-service.service';

import { NavbarServiceService } from '../ApiServices/navBar/navbar-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'single-tour-page',
  templateUrl: './single-tour-page.component.html',
  styleUrls: ['./single-tour-page.component.css']
})

export class SingleTourPageComponent implements OnInit {

  //check login

  public isLoggedIn = false;

  public showMessage = false;

  //handle user login

  public handleLogin(){

    var userToken = localStorage.accessToken;

    userToken = userToken.trim();

    if(userToken && userToken.length > 0){

      this.isLoggedIn = true;

    }
  }

  //passengers' count

  public passengerCount = {
    'adults': 0,
    'children': 0,
    'infants': 0
  };

  //price for passengers' count

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

    this.confirmBooking();

  }

  public bookingButton = false;


  public confirmBooking(){



    this.bookingButton = true;
    
    var sum = Number(this.bookingData["adults"]) + Number(this.bookingData["children"]) + Number(this.bookingData["infants"]); 

    console.log(sum);
    if( sum < 1 ){

      this.bookingButton = false;

    }


  }

  //carousel start position ( transform:translateX(0) )

  public carouselPosition = 0;

  public previousCarouselPosition = 0;

 
  //carousel maximum increment value (found by calculating amount of the cards in the carousel)

  //will be calculated dynamically in the future

  public carouselLimit = -500;

  public prevCarouselLimit = 0;


  //carousel increment/decreament value (translateX will be increased/decreased by 51 percent everytime)

  public carouselStep = {

    right: -100,

    left: 100

  }

  //carousels' functions

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




  //issues about modals

  public showModal = false;

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


  // API operations starts
   
  public singleTour : any = {

    "name" : ""

  }

  public isInternal = false;

  public isExternal = false;

  public tourID;

  //map latitude and longitude

  lat;

  lng;

  //tour's all reviews

  public tourReviews : any = {

    "text" : ""

  }

  public showAverageCommentRating = true;

  //get SingleTour data

  public getSingleTour(){

    var id = this.route.snapshot.paramMap.get('id'); //get value of 'id' parameter on the route ( '/1' , '/2', etc.)
   
    this.TourService.getSingleTour( id ).subscribe( data => {

      this.singleTour = data;
      

      this.singleTour = this.singleTour.output;

      //change page title and equal it to the current tour name

      this.changeTitle(this.singleTour.name + " - Ziqzaq.az");

      this.tourID = this.singleTour.id;

      this.carouselLimit = -(this.singleTour.photos.length - 1) * 100;

      this.prevCarouselLimit = -(this.singleTour.previousPhotos.length - 1) * 25;

      this.lat = this.singleTour.mapLatitude;

      this.lng = this.singleTour.mapLongitude;

      this.isInternal = this.singleTour.isInternal;

      this.tourReviews = this.singleTour.reviews;

      if(this.tourReviews.length < 1){

        this.showAverageCommentRating = false;
      }

      console.log(this.tourReviews);

      console.log(this.singleTour);

      // assign tour id to 'id' key in the bookingData variable, when tour data fully retreived
      
      this.bookingData["tourId"] = this.singleTour.id;

      this.commentData["tourId"] = this.singleTour.id;

      this.getTourServices();

      this.getTourType();

      this.getUser(this.userID);

      this.findAverageCount();
      
    });

  }

  //get tour type (internal external or vip)

  public getTourType(){

    if(this.isInternal){

      return;

    }

    this.isExternal = true;

  }

  //current Time

  public getCurrentTime(){

    var time = new Date();

    var month : any = time.getMonth().toString();

    month = month.padStart(2,0);

    var day : any = time.getDate().toString();

    day = day.padStart(2,0);

    var timeFormatted = time.getFullYear() + "-" + month + "-" + day;

    console.log(timeFormatted);

    return timeFormatted;

  }

  //get tour's SERVICES 

  public tourServices : any = {

    output : []

  }

  public getTourServices(){

    

  }




        //share button operations


        public shareEnabledId;

        public openSharingPanel(id){
      
          console.log("sharing");
      
          this.shareEnabledId = id;
          
        }


        
  //make tour favorite with heart icon

  //favorite tour data

  public favoriteTourData = {

    "userId": "",
    "tourId": 0,
    "status": true
    
  }

  //function - to make favorite tour
  
  public makeTourFavorite( tourId , clickedElement ){
  
    var heartElement = clickedElement.target.parentElement.parentElement;

    console.log(heartElement);
  
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

    });
        
  }

  //get User data which is logged in

  public userID = localStorage.userId;

  public userInfo : any = {

    "name" : ""

  };

  public getUser(userID){

    this.UserService.getUserById(userID).subscribe(data =>{

      var userData : any = data;

      userData = userData.output;

      this.userInfo = userData;

      return userData.name

    });

  }



  // post booking 
  
  public bookingData = {

    "createdDate": this.getCurrentTime(),

    "updateDate": this.getCurrentTime(),

    "adults": 0,

    "children": 0,

    "infants": 0,

    "bookingStatus":"0",

    "userId": "",

    "tourId": ""

  }

  // localStorage.getItem("userId") ? localStorage.getItem("userId") : ""

  public postBooking() {
    // console.log("OK");

    // we'll make notify user to login in order to post a comment

    this.bookingData.userId = localStorage.getItem("userId");

    if(this.bookingData.userId.length < 1){

      console.log("OK");

      return;

    }

    console.log("OK");

  

    this.BookingService.createBooking(this.bookingData).subscribe(data => console.log(data));

  }





  // post comment

  public commentData = {

    "text": "",

    "starValue": "1",

    "createdDate": this.getCurrentTime(),

    "tourId": "",

    "userId": "01de0d2f-cb6a-4362-b7b4-193a1bf3733d"

  }

  //comment star hover


  public mouseOveredFive = false;

  public mouseOveredFour = false;

  public mouseOveredThree = false;

  public mouseOveredTwo = false;

  public mouseOveredOne = false;

  // localStorage.getItem("userId") ? localStorage.getItem("userId") : ""

  //get star for tour comment

  public starComment(event,starContainer){

    console.log(event.target.parentElement.parentElement.parentElement);

    var index = event.target.parentElement.parentElement.parentElement.getAttribute("starIndex");

    for (let i = 0; i > index; i++) {

      starContainer.children[i].style.color = "#F9CE1D";
      
    }
    

  }

  public resetCommentData(){

    this.mouseOveredFive = false;

    this.mouseOveredFour = false;

    this.mouseOveredThree = false;

    this.mouseOveredTwo = false;

    this.mouseOveredOne = false;

  }

  //messageBox validate

  public errorInMessage = false;

  public createComment() {

    // we'll make notify user to login in order to post a comment

    if(this.commentData.userId.length < 1){
      return;
    }

    if(this.commentData.text.length < 1){
      this.errorInMessage = true;
      return;
    }

    this.errorInMessage = false;

    this.ReviewService.postComment(this.commentData).subscribe(data => console.log(data));

    this.resetCommentData();

  }

  //tour average star value

  public tourAverageValue = 0;

  //average comment

  public findAverageCount(){

    var reviews = this.tourReviews;

    var sumOfStarValue = 0;

    var i;

    for(i = 0; i < reviews.length; i++){

      sumOfStarValue = sumOfStarValue + reviews[i].starValue;

    }

    var averageOfStarValue = sumOfStarValue / (reviews.length);

    this.tourAverageValue = averageOfStarValue;

  }



  //remove 'T' symbol form retreived date
  // eg: 02.10.2020T00:01:00 => 02.10.2020

  public formatData(date){

    var data = date.split("T");

    data = data[0];
    
    return data;

  }

  //remove ' ' symbol from retreived date 
  //eg: 02.10.2020 00:01:00 => 02.10.2020

  public formatReviewData(date){

    var data = date.split(" ");

    data = data[0];

    return data;

  }
  
  //remove ' ' symbol from retreived date
  //eg: 02.10.2020 00:01:00 => 02.10.2020

  public formatTourProgramData(date){

    var data = date.split(" ");

    data = data[1];

    data = data.split(":");

    data = data[0] + ":" + data[1];

    console.log()

    return data;

  }

  public changeTitle(currentRoute){

    this.navbarService.changeTitle(currentRoute);
  }




  



  // API operations ends

  constructor( 

    public route : ActivatedRoute,

    public TourService : TourServiceService,

    public BookingService : BookingServiceService,

    public ReviewService : ReviewServiceService,

    public UserService : UserServiceService,

    public navbarService : NavbarServiceService,

    public router : Router

    ) { }





  ngOnInit() {

    this.getSingleTour();

    this.previousCarouselSlide();

    this.handleLogin();


  }

}


