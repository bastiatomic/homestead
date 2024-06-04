import { Component } from '@angular/core';
import { chartDataMonthlyOverview } from '../mock_database';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-monthly-overview-chart',
  standalone: true,
  imports: [],
  template: `
    <div >
      <canvas id="MyChart">{{ chart }}</canvas>
    </div>
  `,
  styleUrl: './monthly-overview-chart.component.scss',
})
export class MonthlyOverviewChartComponent {
  ngOnInit(): void {
    this.createChart();
  }
  public chart: any;

  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'bar', //this denotes tha type of chart
      data: chartDataMonthlyOverview,
      options: {
        color: 'white',

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
}
