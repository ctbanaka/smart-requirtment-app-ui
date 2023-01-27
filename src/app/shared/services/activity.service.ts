import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom   } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http: HttpClient) { }


  async getChartData(): Promise<any> {
    const chartUrl = 'http://10.77.251.201:3000/activity';
    return await lastValueFrom(this.http.get(chartUrl));
  }


  GetChartinfo() {
    // return this.http.get("http://localhost:3000/getallselectratio");    
    let body = {
      "key": "Select",
      "queryKey": "Source",
      "towerIds": [],
      "skillIds": [],
      "vendorIds": [],
      "sourceIds": ["4", "114", "7", "6", "1", "124", "125", "126", "127", "128", "129", "5", "3", "2", "8", "103", "102", "112", "110", "111", "113", "105", "108", "106", "109", "104", "107", "130", "11"],
      "startDate": "2022-01-16",
      "endDate": "2023-01-24"
    }
    return this.http.post("https://dev.actlabinnovationdev.digitalcloudplatform.com/smarthirenodejs/reports/filterInnerPieChart",
      body);

  }


  GetRejectRatio() {
    // return this.http.get("http://10.77.251.201:3000/getallRejectratio");
    let body = {
      "key": "Reject",
      "queryKey": "Source",
      "towerIds": [],
      "skillIds": [],
      "vendorIds": [],
      "sourceIds": ["4", "114", "7", "6", "1", "124", "125", "126", "127", "128", "129", "5", "3", "2", "8", "103", "102", "112", "110", "111", "113", "105", "108", "106", "109", "104", "107", "130", "11"],
      "startDate": "2022-01-16",
      "endDate": "2023-01-24"
    }
    return this.http.post("https://dev.actlabinnovationdev.digitalcloudplatform.com/smarthirenodejs/reports/filterInnerPieChart",
      body);
  }
}
