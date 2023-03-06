import { APP_ID, Component } from '@angular/core';
import { GoogleApiService } from '../google-api.service';
import { topics } from '../topics';
import { Object } from '../Objectives';
import { ObjectivesService } from '../objectives.service';

@Component({
  selector: 'app-objectives',
  templateUrl: './objectives.component.html',
  styleUrls: ['./objectives.component.css']
})
export class ObjectivesComponent {

  objectives3: Object[] = []

  new_objective = {
    name: "",
    category: "",
  }
  ngOnInit(){
    //this.GET_sheetsAPI_getNamedRange('GET_objectives_unsolved')
    this.objectives3 = this.ObjectService.objectives_list
  }

  constructor(
    private api: GoogleApiService, private ObjectService: ObjectivesService) { }

  async send_request(a: any) {
    //this.objectives3.push();
    //TODO: send to server
    console.log([[a.name],[a.category],["FALSE"],[this.GoogleDate(new Date())]]);

    (await this.api.sheetsAPI_APPEND_by_range("GET_objectives_list", [[a.name, a.category, false, this.GoogleDate(new Date())]])).subscribe(() => {
      console.log('Data appended successfully, now continue with the code...');
    location.reload()});
  }
  async delete2(obj_id: number) {
    await this.api.sheetsAPI_UPDATE_by_range("objectives!C"+obj_id,[true])
    this.objectives3 = this.objectives3.filter(obj => {
      obj.topics = obj.topics.filter(topic => topic.id !== obj_id);
      return obj.topics.length > 0;
    });
    
  }
  

  GoogleDate( JSdate : Date ) { 
    var D = new Date(JSdate) ;
    var Null = new Date(Date.UTC(1899,11,30,0,0,0,0)) ; // the starting value for Google
    return ((D.getTime()  - Null.getTime())/60000 - D.getTimezoneOffset()) / 1440 ;
}
  
}

