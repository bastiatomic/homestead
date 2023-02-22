
import { Component } from '@angular/core';

@Component({
  selector: 'app-finance-input',
  templateUrl: './finance-input.component.html',
  styleUrls: ['./finance-input.component.css']
})

export class FinanceInputComponent {

  notSubmitAllowed : boolean = false;

  financeSubmitObject =  {
    name: "",
    value: 0,
    counterpart: "",
    category: "",
    account: "Deutsche Bank",
    date: new Date().toISOString().slice(0,10),
  }

  onSubmitChange(){
    console.log("onSubmitChange")
    console.log(this.financeSubmitObject)
    if(this.verifyInput()){
      this.sendToCloud()
    }
    
  }
  verifyInput(){
    if(this.financeSubmitObject.name == ""){
      return false;
    }
    return true;
  }
  sendToCloud(){
    console.log("Sending to cloudService ...")
    
  }

}
