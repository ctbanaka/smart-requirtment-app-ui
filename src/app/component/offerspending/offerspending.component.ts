import { Component, OnInit } from '@angular/core';
import {users} from '../../offerspendinglist'
import { Offerspending } from './model/offerspending.model';
import { PaginationService } from '../../shared/services/pagination.service';
//import { OfferspendingService } from '../services/offerspending.service';
import { Offers } from './model/offerspending';
import { OfferspendingService } from '../../shared/services/offerspending.service';


@Component({
  selector: 'app-offerspending',
  templateUrl: './offerspending.component.html',
  styleUrls: ['./offerspending.component.css']
})
export class OfferspendingComponent implements OnInit{

  res: Offers = new Offers;
  offers:any;
  constructor(private offerspendingservice:OfferspendingService){
    this.offerspendingservice.getOffersPendingList().subscribe((data)=>{
      this.offers=data;
    })
  }

  ngOnInit(): void {
   // this.getOffersPendings();
  this.getOffersPendings();
     console.log(this.offerspendingservice.getOffersPendingList());
  }
  offerspendingList: Offerspending[] = users;



 
  


  //------Pagination --------
   title = 'pagination';
   page: number = 1;
   count: number = 0;
   tableSize : number = 4;
   tableSizes: any = [4,10,15,20];

  onTableDataChange(event: any){
    this.page = event;
    //this.offerspendingList;
    
    this.offers;
  }
 
  onTableSizeChange(event: any){
    this.tableSize = event.target.value;
    this.page = 1;
    this.offerspendingList;
  }

  /*
  getReservations() {
    this.reservationService.getReservationList().subscribe(data => {
      console.log(Object.values(data.resList));
      this.reservation = data.resList;

    });*/

    getOffersPendings() {
      // this.offerspendingservice.getOffersPendingList().subscribe(data => {
        // console.log(Object.values(data.resList));
        // this.offers = data.resList;
         

        this.offerspendingservice.getOffersPendingList().subscribe((data)=>{
          this.offers=data;
       });
  }




}
