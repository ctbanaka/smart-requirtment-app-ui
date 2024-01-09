import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfferspendingService {

  //private baseURL = "http://localhost:5000/offers";
 // private baseURL = "http://localhost:3000/allcandidate";
  //private baseURL = "https://sra.onrender.com/pendingofferslist";
  private baseURL = "https://dev.actlabinnovationdev.digitalcloudplatform.com/smarthirenodejs/workflow/fetchFlowCandidates";
  // private baseURL = "https://dev.actlabinnovationdev.digitalcloudplatform.com/smarthirenodejs//workflow/fetchJBCandidatesForBU";
  //private baseURL = "http://localhost:3300/offers";
  //private baseURL = "https://run.mocky.io/v3/e1efd3a8-fc3a-4838-83a8-eb3e39cefe2a";
  constructor(private httpClient: HttpClient) { }

getOffersPendingList(): Observable<any> {
  const body = {
    "key":false,
    "role":"Tower Lead",
    "emailId":"chowdam-vijaya.kumar@capgemini.com",
    "bu_name":"AppsNA"
    // "approver":"chowdam-vijaya.kumar@capgemini.com"
   }
  //  return this.httpClient.post<any>(this.baseURL,body);
  // return this.httpClient.post("https://dev.actlabinnovationdev.digitalcloudplatform.com/smarthirenodejs//workflow/fetchJBCandidatesForBU",body)
  return this.httpClient.post("https://dev.actlabinnovationdev.digitalcloudplatform.com/smarthirenodejs/workflow/fetchFlowCandidates",body)

}
getJoiningBonus(): Observable<any> {
  const body = {
    "approver":"chowdam-vijaya.kumar@capgemini.com"
   }
  return this.httpClient.post("https://dev.actlabinnovationdev.digitalcloudplatform.com/smarthirenodejs//workflow/fetchJBCandidatesForBU",body)

}
}


