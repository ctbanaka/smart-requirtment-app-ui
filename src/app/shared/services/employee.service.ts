import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  getctcdetails() {
    throw new Error('Method not implemented.');
  }

  constructor(private httpClient: HttpClient) { }

  private baseUrl = 'https://dev.actlabinnovationdev.digitalcloudplatform.com/smarthirenodejs//workflow/fetchJBCandidatesForBU';


  postEmployeelist(): Observable<any> {
    // return this.httpClient.get<any[]>(`${this.baseUrl}`)
    let body = {
      "approver":"chowdam-vijaya.kumar@capgemini.com"
    }
    return this.httpClient.post("https://dev.actlabinnovationdev.digitalcloudplatform.com/smarthirenodejs//workflow/fetchJBCandidatesForBU",body)

  }

  getfeedbackifnolist(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseUrl}/allcandidatefeedback`)

  }


  postcandidateexplist(): Observable<any> {
    // return this.httpClient.get<any[]>(`${this.baseUrl}`)
    let body = {
      "approver":"chowdam-vijaya.kumar@capgemini.com"
    }
    return this.httpClient.post("https://dev.actlabinnovationdev.digitalcloudplatform.com/smarthirenodejs//workflow/fetchJBCandidatesForBU",body)

  }
  // getcandidateexplist(): Observable<any[]> {
  //   return this.httpClient.get<any[]>(`${this.baseUrl}/allexperince`)

  // }


  postctcdetailslist(): Observable<any> {
    // return this.httpClient.get<any[]>(`${this.baseUrl}`)
    let body = {
      "approver":"chowdam-vijaya.kumar@capgemini.com"
    }
    return this.httpClient.post("https://dev.actlabinnovationdev.digitalcloudplatform.com/smarthirenodejs//workflow/fetchJBCandidatesForBU",body)

  }

  // getctcdetailslist(): Observable<any[]> {
  //   return this.httpClient.get<any[]>(`${this.baseUrl}/allctc`)

  // }
  
  getctchistorylist(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseUrl}/ctchistory`)

  }


  // getEmployeelist() {
  //   return this.httpClient.get(this.baseUrl);
  // }

}
