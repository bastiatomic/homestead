import { Component } from '@angular/core';
import { endWith, lastValueFrom } from 'rxjs';
import { GoogleApiService, UserInfo } from './google-api.service';
import { ObjectivesService } from './objectives.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngOnInit(){
    //this.objectService.GET_sheetsAPI_getNamedRange('GET_objectives_unsolved')
    console.log(this.userInfo)
  }

  title = 'homestead';
  mailSnippets: string[] = []
  userInfo?: UserInfo

  constructor(private readonly googleApi: GoogleApiService, private objectService: ObjectivesService) {
    googleApi.userProfileSubject.subscribe( info => {
      this.userInfo = info
    })
  }

  isLoggedIn(): boolean {
    return this.googleApi.isLoggedIn()
  }

  logout() {
    this.googleApi.signOut()
  }
  
}
