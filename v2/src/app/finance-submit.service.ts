import { Injectable } from '@angular/core';
import { finance } from './finance';
import { GoogleApiService } from './google-api.service';

@Injectable({
  providedIn: 'root'
})
export class FinanceSubmitService {

  constructor(private api : GoogleApiService) { }

  async send_request(a: finance) {
    //this.objectives3.push();
    //TODO: send to server
    console.log(a);
    
    (await this.api.sheetsAPI_APPEND_by_range("GET_finance_database", [
      [ this.GoogleDate(a.date),a.name, a.value,a.counterpart,a.category, a.account]])).subscribe(() => {
      console.log('Data appended successfully, now continue with the code...');

  });
  }

  pipe_request(a : finance){
    if (this.verifyInput(a)){
      this.sendToCloud(a)
    }

  }
  
verifyInput(a : finance){
  if(
    a.name == "" || 
    a.value == 0 || 
    a.counterpart == ""
    ){
    return false;
  }
  return true;
}
sendToCloud(a : finance){
  console.log("Sending to cloudService ...")
  this.send_request(a)
  
}
GoogleDate( date : Date ) { 
  var D = new Date(date) ;
  var Null = new Date(Date.UTC(1899,11,30,0,0,0,0)) ; // the starting value for Google
  return ((D.getTime()  - Null.getTime())/60000 - D.getTimezoneOffset()) / 1440 ;
}

}
