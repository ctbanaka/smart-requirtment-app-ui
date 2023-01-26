import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private http: HttpClient) { }

  async getPendingOffersData(): Promise<any> {
   let body= {
    "key":false,
    "role":"Tower Lead",
    "emailId":"chowdam-vijaya.kumar@capgemini.com",
    "bu_name":"AppsNA"
    }
   let url= 'https://dev.actlabinnovationdev.digitalcloudplatform.com/smarthirenodejs/workflow/fetchFlowCandidatesAllCount';
   return await lastValueFrom(this.http.post(url,body))
   }

  async getBonusApproval(): Promise<any> {
    const body = {
      "approver":"chowdam-vijaya.kumar@capgemini.com"
      };
      let url='https://dev.actlabinnovationdev.digitalcloudplatform.com/smarthirenodejs//workflow/fetchJBCandidatesForBUAllCount';
    return await lastValueFrom(this.http.post(url,body));
  }
}
