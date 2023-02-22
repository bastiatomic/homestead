import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FinanceInputComponent } from './finance-input/finance-input.component';
import { ObjectivesComponent } from './objectives/objectives.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FinanceInputComponent,
    ObjectivesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
