import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfferspendingService {
/*
  private baseURL = "http://localhost:8083/reservation";
  constructor(private httpClient: HttpClient) { }

  getReservationList(): Observable<any> {

    return this.httpClient.get<any>( "http://localhost:8083/reservation/ShowAllReservations");

  }*/
  
  //private baseURL = "http://localhost:5000/offers";
 // private baseURL = "http://localhost:3000/allcandidate";
  private baseURL = "https://sra.onrender.com/pendingofferslist";
  //private baseURL = "http://localhost:3300/offers";
  //private baseURL = "https://run.mocky.io/v3/e1efd3a8-fc3a-4838-83a8-eb3e39cefe2a";
  constructor(private httpClient: HttpClient) { }

getOffersPendingList(): Observable<any> {

    return this.httpClient.get<any>(this.baseURL);
}
}