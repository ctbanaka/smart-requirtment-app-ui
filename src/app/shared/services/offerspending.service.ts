import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfferspendingService {

  private baseURL = "https://dev.actlabinnovationdev.digitalcloudplatform.com/smarthirenodejs/workflow/fetchFlowCandidates";
  constructor(private httpClient: HttpClient) { }

getOffersPendingList(): Observable<any> {
  const body = {
    "key":false,
    "role":"Tower Lead",
    "emailId":"chowdam-vijaya.kumar@capgemini.com",
    "bu_name":"AppsNA"
   }
  return this.httpClient.post("https://dev.actlabinnovationdev.digitalcloudplatform.com/smarthirenodejs/workflow/fetchFlowCandidates",body)

}
}
