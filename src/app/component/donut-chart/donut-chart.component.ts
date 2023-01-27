import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChartService } from 'app/shared/services/chart.service';
import { ratio } from 'app/models/selectRejectRatio';
import { IChart } from 'app/shared/interfaces/chartInterface';

import { FilterComponent } from '../filter/filter.component';

declare var google: any;

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css']
})
export class DonutChartComponent implements OnInit {

  selectRejectRatio : ratio;

  constructor(
    private chartService:ChartService,
    private modalService: NgbModal,
    private router: Router
  ) { }

  async ngOnInit() {
    await this.initChartData();
    google.charts.load("current", { packages: ["corechart"] });
    google.charts.setOnLoadCallback(this.drawChart.bind(this));
  }

  async initChartData() {
    this.selectRejectRatio = await this.chartService.getChartData();
    console.log(this.selectRejectRatio);
    
  }

  drawChart() {
    console.log("drawing chart");
    const totalCounts= Number(this.selectRejectRatio.total_Counts)
    const rejectioncount = Number(this.selectRejectRatio.reject_Counts);
    const selectioncount = Number(this.selectRejectRatio.select_Counts);
    const rejectionRatio= (rejectioncount/totalCounts)*100;
    console.log(rejectionRatio);
    const selectionRatio= (selectioncount/totalCounts)*100;
    console.log(selectionRatio);
    
    var data = google.visualization.arrayToDataTable([
      ['Task', 'percentage'],
      ['Selected ratio', rejectionRatio],
      ['Rejected ratio', selectionRatio],
      


    ]);
    var options = {
      pieHole: .5,

      width: 500,
      height: 300,

      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              total: {
                show: true
              }
            }
          }
        }

      }

    }
    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    google.visualization.events.addListener(chart, 'click', this.selectHandler);
    chart.draw(data, options);
  }

  selectHandler=(event:any)=>{

    if(event.targetID ==="slice#0")

      this.router.navigateByUrl("rejectratio");

    if(event.targetID ==="slice#1")

      this.router.navigateByUrl("selectratio");

  }



  filterOption(){
    const modalRef = this.modalService.open(FilterComponent);
  }

}