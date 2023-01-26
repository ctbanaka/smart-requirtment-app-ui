import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  
  constructor(private http:HttpClient) { }


  async getChartData() : Promise<any> {
    const chartUrl = 'https://sra.onrender.com/activity';
    return await lastValueFrom(this.http.get(chartUrl));
  }


  GetChartinfo(){
    return this.http.get("https://sra.onrender.com/getallselectratio");
  }


  GetRejectRatio(){
    return this.http.get("http://10.77.240.15:3000/getallRejectratio");
  }
}
