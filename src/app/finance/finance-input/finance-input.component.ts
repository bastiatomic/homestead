import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { GoogleSheetsApiService } from '../../google-sheets-api.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-finance-input',
  standalone: true,
  imports: [CommonModule,
    MatNativeDateModule,
    MatDatepickerModule,  MatButtonModule, MatIcon, MatInputModule, MatFormFieldModule, FormsModule, MatSelectModule],
  templateUrl: './finance-input.component.html',
  styleUrl: './finance-input.component.scss'
})
export class FinanceInputComponent {

  constructor(private readonly sheetsAPI: GoogleSheetsApiService){}
  categories : String[] = ["Bildung", "Diverses", "Filme&Serien", "Freizeit", "Gehalt", "Geschenke", "Haushalt", "Investments", "Kleidung", "Lebensmittel", "Miete", "Mobilfunk", "Musik", "Technik", "Transport"];
  accounts : String[] = ["Deutsche Bank", "PayPal", "Bargeld", "Commerzbank", "TradeRepublic"]

  error = false;

  transaction : any = {
    name: "",
    value: 0,
    counterpart: "",
    category: "",
    date:  new Date(),
    account: "Deutsche Bank"
  }

  async send(){
    this.error = false;
    console.log(this.transaction)
    //this.sheetsAPI.appendByRange("mockDB", this.transaction)
    let a = this.transaction;
    if( Number.isNaN(Number(a.value))){
      this.error = true;
      return;
    } else {
      a.value = Number(a.value);
    }

    //if(a.name == "" || a.category == "" || a.counterpart == "" || a.value == 0){return}

    (await this.sheetsAPI.appendByRange("mockDB", [
      [ this.GoogleDate(a.date),a.name, a.value,a.counterpart,a.category, a.account]])).subscribe(() => {
      console.log('Data appended successfully, now continue with the code...');})

  }
  GoogleDate( date : Date ) { 
    var D = new Date(date) ;
    var Null = new Date(Date.UTC(1899,11,30,0,0,0,0)) ; // the starting value for Google
    return Math.floor ( ((D.getTime()  - Null.getTime())/60000 - D.getTimezoneOffset()) / 1440 );
  }

}
