import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ObjectivesComponent } from './objectives/objectives.component';
import { FinanceComponent } from './finance/finance.component';
import { FinanceInputComponent } from './finance-input/finance-input.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FinanceInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
