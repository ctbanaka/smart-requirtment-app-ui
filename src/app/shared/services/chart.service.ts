import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(
    private http: HttpClient
  ) { }

  async getChartData() : Promise<any> {
    const body = {
      "queryKey":"Source",
      "towerIds":[],
      "skillIds":[],
      "vendorIds":[],
      "sourceIds":["4","114","7","6","1","124","125","126","127","128","129","5","3","2","8","103","102","112","110","111","113","105","108","106","109","104","107","130","11"],
      "startDate":"2022-01-16",
      "endDate":"2023-01-24"
      }
      
    const chartUrl = 'https://dev.actlabinnovationdev.digitalcloudplatform.com/smarthirenodejs/reports/filterOuterPieChart';
    
    return await lastValueFrom(this.http.post(chartUrl,body));
  }
}
