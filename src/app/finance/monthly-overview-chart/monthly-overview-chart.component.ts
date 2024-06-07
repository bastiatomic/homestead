import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { GoogleSheetsApiService } from '../../google-sheets-api.service';
import { ChartData } from './ChartData';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-monthly-overview-chart',
  standalone: true,
  imports: [MatIcon, MatButtonModule],
  template: `
  <button mat-raised-button color="accent" (click)="getMonthlyOverview()"><mat-icon>send</mat-icon>get()</button>
   
      <canvas style="height: 80%; width: 100%" id="MyChart">{{ chart }}</canvas>
  
  `,
})
export class MonthlyOverviewChartComponent {

  constructor (private sheetsAPI: GoogleSheetsApiService){}
  ngOnInit(): void {
    this.getMonthlyOverview()
  }
  public chart: any;

  createChart(chartData: any) {
    this.chart = new Chart('MyChart', {
      type: 'bar', //this denotes tha type of chart
      data: chartData,
      options: {
        color: 'white',
        maintainAspectRatio: false,

        responsive: true,
        scales: {
          x: {
            stacked: true,
            ticks: {
              color: 'white',
            },
            grid: { color: 'rgba(255,255,255,0.05' },
          },
          y: {
            stacked: true,
            ticks: {
              color: 'white',
            },
            grid: { color: 'rgba(255,255,255,0.05' },
          },
        },
      },
    });
  }

  async getMonthlyOverview(){
    const response : any = await this.sheetsAPI.getNamedRange("getMonthlyOverview")
    const response2 : String[][]= response.values
    console.log(response2)
    const chartData : ChartData= this.convertResponseToChartData(response2)
    this.createChart(chartData)

  }

  convertResponseToChartData(data: String[][]) {
    let a: ChartData = {labels: [], datasets: []}
  
    a.labels = data[0].slice(1);
    a.datasets = data.slice(1).map((dataset:any) => {
      const [label, ...values] = dataset;
      const numericValues = values.map((values: any)=> Number(values.replace(',', '.')));
      return {
        label: label,
        data: numericValues
      };
    }).filter(dataset => dataset.data.reduce((sum: number, value: number) => sum + value, 0) !== 0);;
    
    console.log(a)
    return a;
  }
}
