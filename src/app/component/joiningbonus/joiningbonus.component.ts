import { Component } from '@angular/core';
import { OfferspendingService } from 'app/shared/services/offerspending.service';
import { Joiningbonus } from '../offerspending/model/joiningbonus';

@Component({
  selector: 'app-joiningbonus',
  templateUrl: './joiningbonus.component.html',
  styleUrls: ['./joiningbonus.component.css']
})
export class JoiningbonusComponent {

  res: Joiningbonus = new Joiningbonus;
  //offers:any;
  offers1:any;
  selectedRowIndex: any;
  rowValue:any;
  constructor(private offerspendingservice:OfferspendingService){
    this.offerspendingservice.getJoiningBonus().subscribe((data)=>{
      this.offers1=data;
    })
  }

  ngOnInit(): void {
   // this.getOffersPendings();
  this.getJoiningBonus();
     console.log(this.offerspendingservice.getJoiningBonus());
  }



  showForEdit(row) { 
          this.selectedRowIndex = row; 
          console.log("value",this.selectedRowIndex)
          localStorage.setItem("rowValue", this.selectedRowIndex);
   }

  //offerspendingList: Offerspending[] = users;



 
  


  //------Pagination --------
   title = 'pagination';
   page: number = 1;
   count: number = 0;
   tableSize : number = 7;
   tableSizes: any = [7,10,15,20];

  onTableDataChange(event: any){
    this.page = event;
    //this.offerspendingList;
    
    this.offers1;
  }
 
  /*onTableSizeChange(event: any){
    this.tableSize = event.target.value;
    this.page = 1;
    this.offerspendingList;
  }*/

  /*
  getReservations() {
    this.reservationService.getReservationList().subscribe(data => {
      console.log(Object.values(data.resList));
      this.reservation = data.resList;

    });*/

    /*getOffersPendings() {
      // this.offerspendingservice.getOffersPendingList().subscribe(data => {
        // console.log(Object.values(data.resList));
        // this.offers = data.resList;
         

        this.offerspendingservice.getOffersPendingList().subscribe((data)=>{
          this.offers=data;
       });

       
  }*/
  getJoiningBonus() {
    // this.offerspendingservice.getOffersPendingList().subscribe(data => {
      // console.log(Object.values(data.resList));
      // this.offers = data.resList;
       

      this.offerspendingservice.getJoiningBonus().subscribe((data)=>{
        this.offers1=data;
     });



}
}
