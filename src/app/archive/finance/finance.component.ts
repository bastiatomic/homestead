import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FirestoreService } from '../firestore.service';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Chart, registerables } from 'chart.js';
import { Transaction } from './Transaction';

@Component({
  selector: 'app-finance',
  standalone: true,
  imports: [FormsModule, CommonModule, MatInputModule, MatButtonModule, MatFormFieldModule],
  templateUrl: './finance.component.html',
  styleUrl: './finance.component.scss'

})
export class FinanceComponent {

  email: string = ''
  password: string = '';

  constructor(private firebaseService: FirestoreService) {}

  signIn() {
    this.firebaseService.signIn(this.email, this.password);
  }

  async newDocument() {
   this.firebaseService.addTransaction({
    timestamp: new Date(),
    description: "mock_description"+Math.random()*1000,
    value: Math.random()*1000,
    counterpart: "mock_counterpart"+Math.random()*1000,
    category: "mock_category"+Math.random()*1000,
    account: 'DeutscheBank'
   } as Transaction)
  }

  async getDocument(collection: string, document: string){
    const doc = await this.firebaseService.getDocument(collection, document);
    console.log(doc)
  }


  loadCanvas(){
    Chart.register(...registerables);

    // Get the canvas element by ID
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;

    // Create the chart
    new Chart(ctx, {
      type: 'bar', // Chart type
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'], // X-axis labels
        datasets: [
          {
            label: 'Income',
            data: [1200, 1500, 1800, 2000, 2100, 1900, 2500], // Positive transactions
            backgroundColor: 'rgba(75, 192, 192, 0.8)', // Bar fill color for Income
            borderColor: 'rgba(75, 192, 192, 1)', // Bar border color
            borderWidth: 1,
          },
          {
            label: 'Expenses',
            data: [-800, -700, -1000, -1100, -1200, -900, -1300], // Negative transactions
            backgroundColor: 'rgba(255, 99, 132, 0.8)', // Bar fill color for Expenses
            borderColor: 'rgba(255, 99, 132, 1)', // Bar border color
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true, // Makes the chart responsive
        plugins: {
          title: {
            display: true,
            text: 'Monthly Financial Transactions', // Chart title
          },
        },
        scales: {
          x: {
            stacked: true, // Enable stacking on the x-axis
          },
          y: {
            stacked: true, // Enable stacking on the y-axis
            beginAtZero: true, // Start y-axis at 0
          },
        },
        onClick: (event, elements) => {
          if (elements.length > 0) {
            const element = elements[0]; // Get the first clicked element
            const datasetIndex = element.datasetIndex; // Index of the dataset
            const dataIndex = element.index; // Index of the data point
            console.log(element, datasetIndex, dataIndex); // Call the custom function
          }
        },
      },
    });
  }
}