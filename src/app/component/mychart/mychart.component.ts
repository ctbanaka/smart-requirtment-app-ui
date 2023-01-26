import { Component, OnInit } from '@angular/core';
//import { ActivityService } from 'src/app/services/activity.service';
import { ActivityService } from 'src/app/shared/services/activity.service';
import { Chart, plugins, registerables } from 'node_modules/chart.js'
//import { convertHexToColor } from '@syncfusion/ej2-angular-charts';
//import {conve}
import { config } from 'rxjs';
import { NumberValueAccessor } from '@angular/forms';
Chart.register(...registerables);


@Component({
  selector: 'app-mychart',
  templateUrl: './mychart.component.html',
  styleUrls: ['./mychart.component.css']
})
export class MychartComponent  {

// total:number;

  constructor(private service:ActivityService) { 
    // this.total=0;
  }

chartdata:any
labeldata:any[]=[];
realdata:any[]=[];
colordata:any[]=[];



ngOnInit(): void {
    this.service.GetChartinfo().subscribe(result => {
    this.chartdata = result;
    if(this.chartdata!=null){
      for(let i=0; i<this.chartdata.length ;i++){
        //console.log(this.chartdata[i]);
        this.labeldata.push(this.chartdata[i].labelling);
        this.realdata.push(this.chartdata[i].selectratio);
        this.colordata.push(this.chartdata[i].colorcode);
      }
      // console.log(this.total);
     // this.RenderChart(this.labeldata,this.realdata,this.colordata,'bar','barchart');
      this.RenderChart(this.labeldata,this.realdata,this.colordata,'pie','piechart');
      //this.RenderChart(this.labeldata,this.realdata,this.colordata,'doughnut','dochart');
      //this.RenderChart(this.labeldata,this.realdata,this.colordata,'polarArea','pochart');
      //this.RenderChart(this.labeldata,this.realdata,this.colordata,'radar','rochart');  
    }
  });  
}



RenderChart(labeldata:any,maindata:any,colordata:any,type:any,id:any) {

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
        const xLine = x >= halfwidth ? x + 25 : x - 25;
        const yLine = y >= halfheight ? y + 25 : y - 25;

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
        ctx.font = "12px Arial";
        // control the position
        const textXPosition = x >= halfwidth ? "left" : "right";
        const plusFivePx = x >= halfwidth ? 5 : -5;
        ctx.textAlign = textXPosition;
        ctx.textBaseline = "middle";
        // ctx.fillStyle = dataset.backgroundColor[index];
        ctx.fillStyle = "black";
       // console.log(chart.data)
        ctx.fillText(
          (labeldata[index]+" "+maindata[index]+"%" ) ,
          xLine + extraLine + plusFivePx,
          yLine
          //ctx.fillText(datapoint,xLine + extraLine  , yLine)
          
        );
      });
    });
  },
};


/////-------------------

  const myChart = new Chart(id,{
    type: type,
    data: {
    //  labels: labeldata,
      
      datasets: [{
       // label: 'year',
        data: maindata,
        backgroundColor: colordata,
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
        padding: 50
        
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

}
