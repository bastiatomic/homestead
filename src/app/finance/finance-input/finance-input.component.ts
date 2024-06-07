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
})
export class FinanceInputComponent {

  constructor(private readonly sheetsAPI: GoogleSheetsApiService){}
  categories : String[] = ["Bildung", "Diverses", "Filme&Serien", "Freizeit", "Gehalt", "Geschenke", "Haushalt", "Investments", "Kleidung", "Lebensmittel", "Miete", "Mobilfunk", "Musik", "Technik", "Transport"];
  accounts : String[] = ["Deutsche Bank", "PayPal", "Bargeld", "Commerzbank", "TradeRepublic"]

  error = false;

  transaction : any = {
    name: "",
    value: null,
    counterpart: "",
    category: "",
    date:  new Date(),
    account: ""
  }

  async send(){
    this.error = false;
    //this.sheetsAPI.appendByRange("mockDB", this.transaction)
    let a = this.transaction;
    if( Number.isNaN(Number(a.value))){
      this.error = true; // swap . y return Number(a.value.replace(",","."))
      return;
    } else {
      a.value = Number(a.value);
    }

    if(a.name == "" || a.category == "" || a.counterpart == "" || a.value == null){console.log(false);return}
    if(a.account == ''){a.account = "Deutsche Bank"}

    const transaction = [this.GoogleDate(a.date),a.name, a.value,a.counterpart,a.category, a.account];

    (await this.sheetsAPI.appendByRange("mockDB", [transaction])).subscribe(() => {
      this.transaction.name = "";
      this.transaction.value = null;
      this.transaction.counterpart = "";
    })

  }
  GoogleDate( date : Date ) { 
    var D = new Date(date);
    var Null = new Date(Date.UTC(1899,11,30,0,0,0,0)) ; // the starting value for Google
    return Math.floor ( ((D.getTime()  - Null.getTime())/60000 - D.getTimezoneOffset()) / 1440 );
  }

}
