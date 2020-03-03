import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../ApiServices/user/user-service.service';

@Component({
  selector: 'booked-tours',
  templateUrl: './booked-tours.component.html',
  styleUrls: ['./booked-tours.component.css']
})
export class BookedToursComponent implements OnInit {

  public defaultValue = "Turları sırala";

  public changeOption(sent){
    var sentValue = sent.getAttribute("value");
    this.defaultValue = sentValue;
  }

  public allOptionsHidden = true;

  public showAllOptions() {
    this.allOptionsHidden =  !this.allOptionsHidden;
  }


  public plannedTours

  
  public getPlannedTours(){

    this.plannedTours = this.userService.getPlannedTours().subscribe( data =>{


      this.plannedTours = data;

      this.plannedTours = this.plannedTours.output;

      console.log(this.plannedTours);
    });

    
  }

  constructor( public userService : UserServiceService) { }

  ngOnInit() {

    this.getPlannedTours();
  }

}
