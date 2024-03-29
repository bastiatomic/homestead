import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FinanceInputComponent } from './finance-input/finance-input.component';
import { ObjectivesComponent } from './objectives/objectives.component';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
import { JournalComponent } from './journal/journal.component';
import { CookingComponent } from './cooking/cooking.component';
import { GymComponent } from './gym/gym.component';
import { FinanceComponent } from './finance/finance.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FinanceInputComponent,
    ObjectivesComponent,
    JournalComponent,
    CookingComponent,
    GymComponent,
    FinanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    OAuthModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
