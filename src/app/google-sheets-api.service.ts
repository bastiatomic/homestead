import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom,map } from 'rxjs';
import { GoogleAuthService } from './google-auth.service';

@Injectable({
  providedIn: 'root'
})
export class GoogleSheetsApiService {

  sheets = 'https://sheets.googleapis.com/v4/spreadsheets'; //API_BASE

  spreadsheetId = '1O25tNbNDdWpgTM3tswxrfhIxcmG4DKCyVy_0vmo2rio';

  constructor(private readonly httpClient: HttpClient, private readonly oAuthService: GoogleAuthService) { }

  async getNamedRange(namedRange: String){ //working
    const content = await lastValueFrom(
      this.httpClient.get(`${this.sheets}/${this.spreadsheetId}/values/${namedRange}?majorDimension=ROWS`, { headers: this.oAuthService.authHeader() })
    )
    console.log("GET: " + namedRange)
    return content
  }


  //ALIGN ME [values]
  /*async updateByRange(range: String, values: any){
    console.log("UPDATE_sheetsAPI_by_cell("+range+")" )
    this.httpClient.put(`${this.sheets}/${this.spreadsheetId}/values/${range}?includeValuesInResponse=true&valueInputOption=RAW&key=${this.oAuthService.getApiKey()}`,
      { "values": [values] },
      { headers: this.oAuthService.authHeader() }).pipe()
      .subscribe((response: any) => {
        console.log(response); //value
      });
  }*/
  //TODO: allign me
  async appendByRange(range: String, values: any){
    var valueInputOption = "RAW"
    return this.httpClient.post(
      `${this.sheets}/${this.spreadsheetId}/values/${range}:append?valueInputOption=${valueInputOption}`,
      { "values": values},
      { headers: this.oAuthService.authHeader() })
      .pipe(
        map((response: any) => {
        console.log('Data appended successfully:', response);
        return response;
      }))
  }
}
