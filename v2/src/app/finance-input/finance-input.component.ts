
import { Component } from '@angular/core';
import { finance } from '../finance';
import { FinanceSubmitService } from '../finance-submit.service';

@Component({
  selector: 'app-finance-input',
  templateUrl: './finance-input.component.html',
  styleUrls: ['./finance-input.component.css']
})

export class FinanceInputComponent {

  constructor(private financeService: FinanceSubmitService){}

  notSubmitAllowed : boolean = false;

  /*financeSubmitObject =  {
    name: "",
    value: 0,
    counterpart: "",
    category: "",
    account: "Deutsche Bank",
    date: new Date().toISOString().slice(0,10),
  }*/

  financeSubmitObject : finance = {
    name: "", value: 0, counterpart: "", category: "Lebensmittel", account: "Deutsche Bank", date: new Date()
  }

  onSubmitChange(){
    this.financeService.pipe_request(this.financeSubmitObject)
    this.financeSubmitObject.name = ""
    this.financeSubmitObject.value = 0
  }

}
