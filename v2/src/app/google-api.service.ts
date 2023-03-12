import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { lastValueFrom, map, Observable, Subject } from 'rxjs';
import { ObjectivesService } from './objectives.service';
import { FinanceService } from './finance.service';
const authCodeFlowConfig: AuthConfig = {
  // Url of the Identity Provider
  issuer: 'https://accounts.google.com',

  // strict discovery document disallows urls which not start with issuers url
  strictDiscoveryDocumentValidation: false,

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin,

  // The SPA's id. The SPA is registerd with this id at the auth-server
  // clientId: 'server.code',
  clientId: '837767818302-cbn24e9j41t8bfhmosgvvs200q1t991g.apps.googleusercontent.com',

  // set the scope for the permissions the client should request
  scope: 'openid profile email  https://www.googleapis.com/auth/spreadsheets',

  showDebugInformation: true,

};

export interface UserInfo {
  info: {
    sub: string
    email: string,
    name: string,
    picture: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {

  gmail = 'https://gmail.googleapis.com'
  sheets = 'https://sheets.googleapis.com/v4/spreadsheets'; //API_BASE

  spreadsheets = {
    mock: {id: '1qFlBuwopUtnxvVZ-K0_yZiQMhynqQobO2yUVZ6bS4yo'},
    prod: {id: "1O25tNbNDdWpgTM3tswxrfhIxcmG4DKCyVy_0vmo2rio"}
  }

  spreadsheetId = this.spreadsheets.prod.id

  userInfo?: UserInfo
  API_KEY = 'AIzaSyCOcTe261vaOow-cZPbTiMkBeRANdOweeA'

  userProfileSubject = new Subject<UserInfo>()

  constructor(private readonly oAuthService: OAuthService, private objS: ObjectivesService, private finS: FinanceService, private readonly httpClient: HttpClient) {
    // confiure oauth2 service
    oAuthService.configure(authCodeFlowConfig);
    // manually configure a logout url, because googles discovery document does not provide it
    oAuthService.logoutUrl = "https://www.google.com/accounts/Logout";

    // loading the discovery document from google, which contains all relevant URL for
    // the OAuth flow, e.g. login url
    oAuthService.loadDiscoveryDocument().then( () => {
      // // This method just tries to parse the token(s) within the url when
      // // the auth-server redirects the user back to the web-app
      // // It doesn't send the user the the login page
      oAuthService.tryLoginImplicitFlow().then( () => {

        // when not logged in, redirecvt to google for login
        // else load user profile
        if (!oAuthService.hasValidAccessToken()) {
          oAuthService.initLoginFlow()
        } else {
          oAuthService.loadUserProfile().then( (userProfile) => {
            console.log("using spreadsheet: "+ this.spreadsheetId)
            this.userProfileSubject.next(userProfile as UserInfo)
            this.load_databases()
          })
        }

      })
    });
  }
  async load_databases(){
    var content = await this.sheetsAPI_GET_by_named_range('GET_objectives_unsolved');
    this.objS.construct_obj2(content)

    var content = await this.sheetsAPI_GET_by_named_range('GET_finance_groups');
    this.finS.construct_groups(content)

  }

  async sheetsAPI_GET_by_named_range(namedRange: String){ //working
    const content = await lastValueFrom(
      this.httpClient.get(`${this.sheets}/${this.spreadsheetId}/values/${namedRange}?majorDimension=ROWS`, { headers: this.authHeader() })
    )
    console.log("GET: " + namedRange)
    return content
  }

  //ALIGN ME [values]
  async sheetsAPI_UPDATE_by_range(range: String, values: any){
    console.log("UPDATE_sheetsAPI_by_cell("+range+")" )
    this.httpClient.put(`${this.sheets}/${this.spreadsheetId}/values/${range}?includeValuesInResponse=true&valueInputOption=RAW&key=${this.API_KEY}`,
      { "values": [values] },
      { headers: this.authHeader() }).pipe()
      .subscribe((response) => {
        console.log(response); //value
      });
  }
  //TODO: allign me
  async sheetsAPI_APPEND_by_range(range: String, values: any){
    var valueInputOption = "RAW"
    return this.httpClient.post(
      `${this.sheets}/${this.spreadsheetId}/values/${range}:append?valueInputOption=${valueInputOption}`,
      { "values": values},
      { headers: this.authHeader() })
      .pipe(
        map((response) => {
        console.log('Data appended successfully:', response);
        return response;
      }))
  }

  isLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken()
  }

  signOut() {
    this.oAuthService.logOut()
  }

  private authHeader() : HttpHeaders {
    return new HttpHeaders ({
      'Authorization': `Bearer ${this.oAuthService.getAccessToken()}`
    })
  }
}
