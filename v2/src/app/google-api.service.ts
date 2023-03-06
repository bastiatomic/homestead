import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { lastValueFrom, map, Observable, Subject } from 'rxjs';
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

  spreadsheetId = this.spreadsheets.mock.id

  userInfo?: UserInfo
  API_KEY = 'AIzaSyCOcTe261vaOow-cZPbTiMkBeRANdOweeA'

  API_ENDPOINTS = {
    "x": "X"
  }

  userProfileSubject = new Subject<UserInfo>()

  constructor(private readonly oAuthService: OAuthService, private readonly httpClient: HttpClient) {
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
          })
        }

      })
    });
  }

  GET_sheetsAPI_by_named_range2(namedRange : String, ){
    //DO NOT IMPLEMENT THIS METHODE IN OTHER SERVICES
    return this.httpClient.get(`${this.sheets}/${this.spreadsheetId}/values/${namedRange}?majorDimension=ROWS`, { headers: this.authHeader() })
  }

  async sheetsAPI_GET_by_named_range(namedRange : String, ){ //working
    const content = await lastValueFrom(this.GET_sheetsAPI_by_named_range2(namedRange))
    console.log("API START")
    console.log(content)
    console.log("API END")
    return content

  }

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
  async sheetsAPI_APPEND_by_range(range: String, values_as_entire_row: any){
    var valueInputOption = "RAW"
    return this.httpClient.post(
      `${this.sheets}/${this.spreadsheetId}/values/${range}:append?valueInputOption=${valueInputOption}`,
      { "values": values_as_entire_row},
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
