import { Component } from '@angular/core';
import { FinanceService } from '../finance.service';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent {

  constructor(private finS : FinanceService){}

  groups : any

  ngOnInit(){
    
    console.log(this.groups)
    this.groups = this.finS.list.values
    console.log(this.groups)

  }

}
