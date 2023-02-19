import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObjectivesComponent } from './objectives/objectives.component';
import { FinanceComponent } from './finance/finance.component';
import { FinanceInputComponent } from './finance-input/finance-input.component';

const routes: Routes = [
  { path: 'objectives', component: ObjectivesComponent },
  { path: 'finance', component: FinanceComponent },
  { path: 'finance_input', component: FinanceInputComponent },
];

@NgModule({
  declarations: [ObjectivesComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
