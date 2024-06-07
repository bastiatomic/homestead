import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { GoogleSheetsApiService } from '../../google-sheets-api.service';
import {MatTableModule} from '@angular/material/table';
import {  Transaction } from './Transaction';

import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatButtonModule, MatTableModule, MatIcon, MatFormFieldModule, FormsModule, MatInputModule, CommonModule],
  templateUrl: './search.component.html',
})
export class SearchComponent {

  constructor(private sheetsAPI: GoogleSheetsApiService){}
  
  dataSource : any;
  value: String = ""
  //dataSource : Transaction[] = [];
  displayedColumns : String[] = ["date", "name", "value", "counterpart",	"category"];

  async ngOnInit(){
    const response : any= await this.sheetsAPI.getNamedRange("search_term");

    this.value = response.values[0];

    this.dataSource = await this.getSearchResults();
  }

  async postSearchTerm(){

    await this.sheetsAPI.sheetsAPI_UPDATE_by_range("search_term", this.value);

    const verifyResponse = await this.sheetsAPI.getNamedRange("search_term");
    
    console.log(verifyResponse)

    this.dataSource = await this.getSearchResults();
  
    

  }

  async getSearchResults() : Promise<Transaction[]>{
    let results : any = await this.sheetsAPI.getNamedRange('search_results_max10')

    const dataSource : Transaction[] = [];
    results.values.forEach((element: String[])=>{
      dataSource.push({date: element[0], name: element[1], value: element[2], counterpart: element[3], category: element[4]});
    })
    return dataSource;
  }
}
