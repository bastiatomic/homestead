import { Component } from '@angular/core';
import { GoogleAuthService, UserInfo } from '../google-auth.service';
import { lastValueFrom } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GoogleSheetsApiService } from '../google-sheets-api.service';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { FinanceInputComponent } from './finance-input/finance-input.component';


@Component({
  selector: 'finance-dashboard',
  standalone: true,
  imports: [FinanceInputComponent, CommonModule, HttpClientModule, MatInputModule, MatFormFieldModule, FormsModule, MatSelectModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class FinanceComponent {
  title = 'angular-google-oauth-example';

  mailSnippets: string[] = []
  userInfo?: UserInfo
  searchResults: string[][] = []

  constructor(private readonly googleApi: GoogleAuthService, private readonly sheetsAPI : GoogleSheetsApiService) {
    googleApi.userProfileSubject.subscribe( info => {
      this.userInfo = info
    })
  }
  async getSearchResults(){
    let results : any = await this.sheetsAPI.getNamedRange('search_results_max10')
    this.searchResults = results.values
  }

  isLoggedIn(): boolean {
    return this.googleApi.isLoggedIn()
  }

  logout() {
    this.googleApi.signOut()
  }

  async getEmails() {
    if (!this.userInfo) {
      return;
    }

    const userId = this.userInfo?.info.sub as string
    const messages = await lastValueFrom(this.googleApi.emails(userId))
    messages.messages.forEach( (element: any) => {
      const mail = lastValueFrom(this.googleApi.getMail(userId, element.id))
      mail.then( mail => {
        this.mailSnippets.push(mail.snippet)
      })
    });
  }
}
