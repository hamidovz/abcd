import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VendorServiceService {


  public currentImgPreview : any = [];

  public apiUrl = {

    vendorLogin : "http://ziqzaq.az/api/vendor/login",

    getTourServices : "http://ziqzaq.az/api/service",

    getTourProgramType : "http://ziqzaq.az/api/programType",

    vendorAddTour : "http://ziqzaq.az/api/tour"

  }

  // http headers to inject into the request:

  public sendHeader = {
    
    vendorLogin : {
      headers : new HttpHeaders(  {"Content-Type" : "application/json" } )
    },

    getTourService : {
      headers: new HttpHeaders({ 'Access-Control-Allow-Origin' : '*',"Authorization":"Bearer " + localStorage.getItem("vendorToken")})
    },


    getTourPrograms : {
      headers: new HttpHeaders({ 'Access-Control-Allow-Origin' : '*',"Authorization":"Bearer " + localStorage.getItem("vendorToken")})
    },

    
    vendorAddTour : {
      headers: new HttpHeaders({ 'Access-Control-Allow-Origin' : '*',"Authorization":"Bearer " + localStorage.getItem("vendorToken")})
    }

  }


  public vendorLogin( loginData ){

    return this.http.post( this.apiUrl.vendorLogin , loginData , this.sendHeader["vendorLogin"] );

  }


  //get tourServices to add into the 'vendorTourAddServices' page (page with checkboxes)

  public getTourService(){

    return this.http.get( this.apiUrl.getTourServices, this.sendHeader["getTourService"] );

  }


  //get programTypes (fealiyyet) to add into the vendorTourAddPrograms page

  public getTourProgramType(){
    console.log("qwerty");

    return this.http.get( this.apiUrl.getTourProgramType , this.sendHeader["getTourPrograms"] );
  }



//get values of file input (uploaded imgs in the client side)
//and make an array of them



public convertDateToString(date){

  var year = date.year.toString();

  var day = date.day.toString();

  var month = date.month.toString()
  
  day = day.length == 1 ?  "0" + day : day;

  month = month.length == 1 ?  "0" + month : month;

  var result = year + "-" + month + "-" + day;

  return result;

}




//arrivalTime and departureTime are sent as object
//we need to convert it to a string in order to send it to the server

  public addTour( currentImgs , prevTourImgs , tourData) {

    var currentImg : any =  currentImgs.files;

    var currentImgLength = currentImg.length;

    var prevTourImg : any = prevTourImgs.files;

    var prevTourImgLength = prevTourImg.length;


    //converting departureTime and arrivalTime to a string

    var arrivalTime = tourData.ArrivalTime;

    var departureTime = tourData.DepartureTime;
    
    tourData.ArrivalTime = this.convertDateToString(arrivalTime);
    
    tourData.DepartureTime = this.convertDateToString(departureTime);


    var sendData = new FormData();

    for (let x in tourData) {


      //images will be sent in the loop below 
      if(x == "currentTourImgs" || x == "prevTourImgs" ){

        continue;

      }

      sendData.append( x, tourData[x] );

    }


    //for sending images
    for( let x=0; x < currentImgLength; x++){

      sendData.append("Photos", currentImg[x]);

    }


    //for sending images
    for( let x=0; x < prevTourImgLength; x++){

      sendData.append("PreviousPhotos", prevTourImg[x]);

    }

    sendData.append("Image", currentImgs.files[0]);

    

    return this.http.post( this.apiUrl.vendorAddTour, sendData , this.sendHeader["vendorAddTour"] );
  
  }


  constructor( public http : HttpClient ) { }
}
