import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../ApiServices/user/user-service.service';

@Component({
  selector: 'attended-tours',
  templateUrl: './attended-tours.component.html',
  styleUrls: ['./attended-tours.component.css']
})
export class AttendedToursComponent implements OnInit {
  public defaultValue = "Turları sırala";

  public changeOption(sent){
    var sentValue = sent.getAttribute("value");
    this.defaultValue = sentValue;
  }

  public allOptionsHidden = true;

  public showAllOptions() {
    this.allOptionsHidden =  !this.allOptionsHidden;
  }

  public bookedTours : any = [];

  public getPlannedTours(){

    this.userService.getVisitedTours().subscribe( data =>{

      this.bookedTours = data;

      console.log(data);

      this.bookedTours = this.bookedTours.output;

    });

    
  }
  
  constructor( public userService : UserServiceService ) { }

  ngOnInit() {

    this.getPlannedTours()
  }

}
