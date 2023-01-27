import { Component, OnInit } from '@angular/core';
//import { ActivityService } from 'src/app/services/activity.service';

//import { Chart, plugins, registerables } from 'node_modules/chart.js'
import { Chart, plugins, registerables } from 'chart.js'
//import { convertHexToColor } from '@syncfusion/ej2-angular-charts';
//import {conve}
import { config } from 'rxjs';
import { NumberValueAccessor } from '@angular/forms';
import { ActivityService } from 'app/shared/services/activity.service';

Chart.register(...registerables);


@Component({
  selector: 'app-mychart',
  templateUrl: './mychart.component.html',
  styleUrls: ['./mychart.component.css']
})
export class MychartComponent {

  // total:number;

  constructor(private service: ActivityService) {
    // this.total=0;
  }

  chartdata: any
  labeldata: any[] = [];
  realdata: any[] = [];
  colordata: any[] = [];



  ngOnInit(): void {
    this.service.GetChartinfo().subscribe(result => {
      this.chartdata = result;
      console.log("chart info showing", this.chartdata);

      //     this.labeldata.push('BU Approved');
      //     this.realdata.push(this.chartdata[0].statusData['BU Approved']);

      //     this.labeldata.push('BU Reject');
      //     this.realdata.push(this.chartdata[0].statusData['BU Reject']);

      //     this.labeldata.push('BU_Select');
      //     this.realdata.push(this.chartdata[0].statusData['BU_Select']);

      //     this.labeldata.push('Candidate Not resp/interest');
      //     this.realdata.push(this.chartdata[0].statusData['Candidate Not resp/interest']);

      //     this.labeldata.push('DG_Appr');
      //     this.realdata.push(this.chartdata[0].statusData['DG_Appr']);

      //     this.labeldata.push('DG_Reject');
      //     this.realdata.push(this.chartdata[0].statusData['DG_Reject']);

      //     this.labeldata.push('DocsSub');
      //     this.realdata.push(this.chartdata[0].statusData['DocsSub']);

      //     this.labeldata.push('HR Reject');
      //     this.realdata.push(this.chartdata[0].statusData['HR Reject']);

      //     this.labeldata.push('HR Select');
      //     this.realdata.push(this.chartdata[0].statusData['HR Select']);

      //     this.labeldata.push('ID_Awaited');
      //     this.realdata.push(this.chartdata[0].statusData['ID_Awaited']);

      //     this.labeldata.push('Joined');
      //     this.realdata.push(this.chartdata[0].statusData['Joined']);

      //     this.labeldata.push('L1 Candidate NA');
      //     this.realdata.push(this.chartdata[0].statusData['L1 Candidate NA']);

      //     this.labeldata.push('L1 On Hold');
      //     this.realdata.push(this.chartdata[0].statusData['L1 On Hold']);

      //     this.labeldata.push('L1 Panel NA');
      //     this.realdata.push(this.chartdata[0].statusData['L1 Panel NA']);

      //     this.labeldata.push('L1 Reject');
      //     this.realdata.push(this.chartdata[0].statusData['L1 Reject']);

      //     this.labeldata.push('L1 Scheduled');
      //     this.realdata.push(this.chartdata[0].statusData['L1 Scheduled']);

      //     this.labeldata.push('L1 Select');
      //     this.realdata.push(this.chartdata[0].statusData['L1 Select']);

      //     this.labeldata.push('L1-L2 Candidate NA');
      //     this.realdata.push(this.chartdata[0].statusData['L1-L2 Candidate NA']);

      //     this.labeldata.push('L1-L2 On Hold');
      //     this.realdata.push(this.chartdata[0].statusData['L1-L2 On Hold']);

      //     this.labeldata.push('L1-L2 Reject');
      //     this.realdata.push(this.chartdata[0].statusData['L1-L2 Reject']);

      //     this.labeldata.push('L1-L2 Scheduled');
      //     this.realdata.push(this.chartdata[0].statusData['L1-L2 Scheduled']);

      //     this.labeldata.push('L1-L2 Select');
      //     this.realdata.push(this.chartdata[0].statusData['L1-L2 Select']);

      //     this.labeldata.push('L1L2_OnHold');
      //     this.realdata.push(this.chartdata[0].statusData['L1L2_OnHold']);

      //     this.labeldata.push('L1L2_Scheduled');
      //     this.realdata.push(this.chartdata[0].statusData['L1L2_Scheduled']);

      //     this.labeldata.push('L1L2_Select');
      //     this.realdata.push(this.chartdata[0].statusData['L1L2_Select']);

      //     this.labeldata.push('L1_OnHold');
      //     this.realdata.push(this.chartdata[0].statusData['L1_OnHold']);

      //     this.labeldata.push('L1_Scheduled');
      //     this.realdata.push(this.chartdata[0].statusData['L1_Scheduled']);

      //     this.labeldata.push('L1_Select');
      //     this.realdata.push(this.chartdata[0].statusData['L1_Select']);

      //     this.labeldata.push('L2 Candidate NA');
      //     this.realdata.push(this.chartdata[0].statusData['L2 Candidate NA']);

      //     this.labeldata.push('L2 On Hold');
      //     this.realdata.push(this.chartdata[0].statusData['L2 On Hold']);

      //     this.labeldata.push('L2 Reject');
      //     this.realdata.push(this.chartdata[0].statusData['L2 Reject']);

      //     this.labeldata.push('L2 Scheduled');
      //     this.realdata.push(this.chartdata[0].statusData['L2 Scheduled']);

      //     this.labeldata.push('L3_Select');
      //     this.realdata.push(this.chartdata[0].statusData['L3_Select']);

      //     this.labeldata.push('NA_Reject');
      //     this.realdata.push(this.chartdata[0].statusData['NA_Reject']);

      //     this.labeldata.push('Not Interested');
      //     this.realdata.push(this.chartdata[0].statusData['Not Interested']);

      //     this.labeldata.push('Offer Sent for Appr');
      //     this.realdata.push(this.chartdata[0].statusData['Offer Sent for Appr']);

      //     this.labeldata.push('Offer-Accept');
      //     this.realdata.push(this.chartdata[0].statusData['Offer-Accept']);

      //     this.labeldata.push('Offer_Accept')
      //     this.realdata.push(this.chartdata[0].statusData['Offer_Accept']);

      //     this.labeldata.push('Offer_Negotiation');
      //     this.realdata.push(this.chartdata[0].statusData['Offer_Negotiation']);

      //     this.labeldata.push('Offer_Rejected');
      //     this.realdata.push(this.chartdata[0].statusData['Offer_Rejected']);

      //     this.labeldata.push('Offer_Released');
      //     this.realdata.push(this.chartdata[0].statusData['Offer_Released']);

      //     this.labeldata.push('PreScreen Select');
      //     this.realdata.push(this.chartdata[0].statusData['PreScreen Select']);

      //     this.labeldata.push('TestTaken');
      //     this.realdata.push(this.chartdata[0].statusData['TestTaken']);

      //     this.labeldata.push('Tower Approved');
      //     this.realdata.push(this.chartdata[0].statusData['Tower Approved']);

      //     this.labeldata.push('Tower Input Required');
      //     this.realdata.push(this.chartdata[0].statusData['Tower Input Required']);

      //     this.labeldata.push('Tower Reject');
      //     this.realdata.push(this.chartdata[0].statusData['Tower Reject']);

      //     this.labeldata.push('preScreen_Select');
      //     this.realdata.push(this.chartdata[0].statusData['preScreen_Select']);

      //     this.labeldata.push('totalValue');
      //     this.realdata.push(this.chartdata[0].statusData['totalValue']);

      //     this.labeldata.push('_Joined');
      //     this.realdata.push(this.chartdata[0].statusData['_Joined']);

      this.labeldata.push('L1-L2 Scheduled');
      this.realdata.push(this.chartdata[0].statusData['L1-L2 Scheduled']);
      this.labeldata.push('L1-L2 On Hold');
      this.realdata.push(this.chartdata[0].statusData['L1-L2 On Hold']);
      this.labeldata.push('L1-L2 Select');
      this.realdata.push(this.chartdata[0].statusData['L1-L2 Select']);
      this.labeldata.push('L1 Select');
      this.realdata.push(this.chartdata[0].statusData['L1 Select']);
      this.labeldata.push('L2 Select');
      this.realdata.push(this.chartdata[0].statusData['L2 Select']);
      this.labeldata.push('L3 On Hold');
      this.realdata.push(this.chartdata[0].statusData['L3 On Hold']);
      this.labeldata.push('L2 On Hold');
      this.realdata.push(this.chartdata[0].statusData['L2 On Hold']);
      this.labeldata.push('L1 On Hold');
      this.realdata.push(this.chartdata[0].statusData['L1 On Hold']);
      this.labeldata.push('L3 Scheduled');
      this.realdata.push(this.chartdata[0].statusData['L3 Scheduled']);
      this.labeldata.push('L1 Scheduled');
      this.realdata.push(this.chartdata[0].statusData['L1 Scheduled']);
      this.labeldata.push('L2 Scheduled');
      this.realdata.push(this.chartdata[0].statusData['L2 Scheduled']);
      this.labeldata.push('L3 Select');
      this.realdata.push(this.chartdata[0].statusData['L3 Select']);
      this.labeldata.push('Offer-Accept');
      this.realdata.push(this.chartdata[0].statusData['Offer-Accept']);
      this.labeldata.push('PreScreen Select');
      this.realdata.push(this.chartdata[0].statusData['PreScreen Select']);
      this.labeldata.push('Joined');
      this.realdata.push(this.chartdata[0].statusData['Joined']);

      this.RenderChart(this.labeldata, this.realdata, this.colordata, 'pie', 'piechart');



    });
  }



  RenderChart(labeldata: any, maindata: any, colordata: any, type: any, id: any) {

    // const customDatalabels = {
    //   id: 'customDatalabels',
    //   afterDatasetsDraw(chart, args, pluginOptions){
    //     const { ctx, data, chartArea: { top, bottom, left, right, width, height}} = chart;
    //     ctx.save();

    //     const halfWidth = width/2 + left;
    //     const halfHeight = height/2 + top+left;

    //     data.datasets[0].data.forEach((datapoint, index) =>{
    //       const { x, y} = chart.getDatasetMeta(0).data[index].tooltipPosition()

    //       //console.log(chart.getDatasetMeta(0).data[index].tooltipPosition())  
    //       ctx.font ='bold 12px sans-serif';
    //       //ctx.fillStyle = data.datasets[0].borderColor[index];
    //       ctx.textAlign = 'center';
    //       ctx.textBaseline = 'bottom';

    //       if(datapoint <= 3){   

    //       ctx.fillText(datapoint, x, y);

    //       }else{
    //         const xLine = x >= halfWidth ? + x+15: x-15;
    //         const yLine = x >= halfHeight ? + y+15: y-15;
    //         const extraLine = x >= halfWidth ? 20: -20;
    //         const textWidth = ctx.measureText(datapoint).width;
    //         const textWidthPosition = x >=  halfWidth ? + textWidth: -textWidth;


    //         ctx.strokeStyle = data.datasets[0].borderColor[index];
    //         ctx.beginPath();
    //         //ctx.arc(x, y, 2, 0, 2 * Math.PI, true);
    //         ctx.moveTo(x, y);
    //         //ctx.lineTo(xLine, yLine);
    //         ctx.lineTo(xLine + extraLine, yLine);

    //         ctx.stroke();



    //         ctx.fillText(datapoint,xLine + extraLine + textWidthPosition , yLine);

    //       }
    //     })
    //   }
    // }


    //////----------------------------------------------------

    const pieLabelsLine = {
      id: "pieLabelsLine",
      afterDraw(chart) {
        const {
          ctx,
          chartArea: { width, height },
        } = chart;

        const cx = chart._metasets[0].data[0].x;
        const cy = chart._metasets[0].data[0].y;

        const sum = chart.data.datasets[0].data.reduce((a, b) => a + b, 0);

        chart.data.datasets.forEach((dataset, i) => {
          chart.getDatasetMeta(i).data.forEach((datapoint, index) => {
            const { x: a, y: b } = datapoint.tooltipPosition();

            const x = 2 * a - cx;
            const y = 2 * b - cy;

            // draw line
            const halfwidth = width / 2;
            const halfheight = height / 2;
            const xLine = x >= halfwidth ? x + 5 : x - 5;
            const yLine = y >= halfheight ? y + 5 : y - 5;

            // const extraLine = x >= halfwidth ? 5 : -5;
            const extraLine = x >= halfwidth ? 5 : -5;


            ctx.beginPath();
            ctx.moveTo(x, y);
            //ctx.arc(x, y, 2, 0, 2 * Math.PI, true);
            ctx.fill();
            ctx.moveTo(x, y);
            ctx.lineTo(xLine, yLine);
            ctx.lineTo(xLine + extraLine, yLine);
            // ctx.strokeStyle = dataset.backgroundColor[index];
            //ctx.strokeStyle = "black";

            ctx.stroke();

            // text
            const textWidth = ctx.measureText(chart.data.labels[index]).width;
            ctx.font = "10px Arial";
            // control the position
            const textXPosition = x >= halfwidth ? "left" : "right";
            const plusFivePx = x >= halfwidth ? 5 : -5;
            ctx.textAlign = textXPosition;
            ctx.textBaseline = "middle";
            // ctx.fillStyle = dataset.backgroundColor[index];
            ctx.fillStyle = "black";
            // console.log(chart.data)
            ctx.fillText(
              (labeldata[index] + " " + maindata[index] + "%"),
              xLine + extraLine + plusFivePx,
              yLine
              //ctx.fillText(datapoint,xLine + extraLine  , yLine)

            );
          });
        });
      },
    };


    /////-------------------

    const myChart = new Chart(id, {
      type: type,
      data: {
        //  labels: labeldata,

        datasets: [{
          // label: 'year',
          data: maindata,
          backgroundColor: this.getcolors,
          borderColor: [
            '#167922'
          ],
          borderWidth: 1
          //cutout: '50%',
        }]
      }
      ,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: 70

        },
        legend: {
          display: false,
        },

      },
      plugins: [
        pieLabelsLine
      ]
    });
    // const ctx = document.getElementById('mychart');
    // const mychart = new Chart(
    //   ctx,
    //   config
    // )
    // const modal = document.getElementById('modal');

    // function modalclose(){
    //   modal.classList.toggle('hide')
    // }

    // function clickHandler(click){
    //   console.log('I clicked')
    // }

    // ctx.onclick = clickHandler;


  }
  getcolors(title) { if (title === "Reject/Select Ratio - %") { return ["#90C418", "#FC4850"]; } else { return ["#4b5320", "#87A96C", "#51c878", "#71bc79", "#228b22", "#40ff01", "#365e3b", "#00a86b", "#4bbb19", "#c0ff01", "#99fb98", "#8a9a5b", "#7f8000", "#01796f", "#009e61", "#2e8a57", "#00ff7f", "#008081", "#3fe0d0", "#841826e"]; } }
}
