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

    getTourPrograms : "http://ziqzaq.az/api/tourProgram",

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

  public getTourPrograms(){

    return this.http.get( this.apiUrl.getTourPrograms , this.sendHeader["getTourPrograms"] );
  }


  public getCookie(type){

    var cookie = document.cookie.split(";");

    var tokenIndex = document.cookie.split(";").map((f,index)=> (f.indexOf(type) > -1) ? index : "")

    var Token = cookie[Number(tokenIndex)];

    Token = Token.split("=")[1];

    return Token;

}


//get values of file input (uploaded imgs in the client side)
//and make an array of them

public makeImgArray(files){

  var imgArray = [];

  var imgLength = files.length;

  for ( let x=0; x < imgLength; x++){

          imgArray.push(files[x]); 

  }

  return imgArray;

}







  public addTour( currentImgs , prevTourImgs , tourData ) {

    var currentImg : any =  currentImgs.files;

    var currentImgLength = currentImg.length;

    // var currentImg = currentImgs.files[]

    // this.extractImgFile(currentImgs);

    // return;

    var prevTourImg : any = prevTourImgs.files;

    var prevTourImgLength = prevTourImg.length;

    var sendData = new FormData();

    for (let x in tourData) {

      sendData.append(x, tourData[x]
        
        );

    }


    for( let x=0; x < currentImgLength; x++){

      sendData.append("Photos", currentImg[x]);

    }

    for( let x=0; x < prevTourImgLength; x++){

      sendData.append("PreviousPhotos", prevTourImg[x]);

    }

    sendData.append("Image", currentImgs.files[0]);
    

    return this.http.post( this.apiUrl.vendorAddTour, sendData , this.sendHeader["vendorAddTour"] );
  
  }


  constructor( public http : HttpClient ) { }
}
