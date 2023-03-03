import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObjectivesComponent } from './objectives/objectives.component';
import { FinanceComponent } from './finance/finance.component';
import { FinanceInputComponent } from './finance-input/finance-input.component';
import { GymComponent } from './gym/gym.component';
import { CookingComponent } from './cooking/cooking.component';
import { JournalComponent } from './journal/journal.component';

const routes: Routes = [
  { path: 'objectives', component: ObjectivesComponent },
  { path: 'finance', component: FinanceComponent },
  { path: 'finance_input', component: FinanceInputComponent },
  { path: 'gym', component: GymComponent },
  { path: 'cooking', component: CookingComponent },
  { path: 'journal', component: JournalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
