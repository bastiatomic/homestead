import { APP_ID, Component } from '@angular/core';
import { Objectives } from '../Objectives';
import { Objectives2 } from '../Objectives2';
import { GoogleApiService } from '../google-api.service';
import { topics } from '../topics';

@Component({
  selector: 'app-objectives',
  templateUrl: './objectives.component.html',
  styleUrls: ['./objectives.component.css']
})
export class ObjectivesComponent {

  objectives3: Objectives2[] = []

  new_objective = {
    name: "",
    category: "",
  }
  ngOnInit(){
    this.GET_sheetsAPI_getNamedRange('GET_objectives_unsolved')
  }

  constructor(
    private api: GoogleApiService) { }

  send_request(a: any) {
    //this.objectives3.push();
    //TODO: send to server
    console.log([[a.name],[a.category],["FALSE"],[this.GoogleDate(new Date())]])
    this.api.sheetsAPI_APPEND_by_range("GET_objectives_list",[[a.name,a.category,false,this.GoogleDate(new Date())]])
    location.reload(); //TODO: larger code may optimise performance
  }
  async delete2(obj_id: number) {
    await this.api.sheetsAPI_UPDATE_by_range("objectives!C"+obj_id,[true])
    this.objectives3 = this.objectives3.filter(obj => {
      obj.topics = obj.topics.filter(topic => topic.id !== obj_id);
      return obj.topics.length > 0;
    });
    
  }
  async GET_sheetsAPI_getNamedRange(namedRange: String) {
    var content = await this.api.sheetsAPI_GET_by_named_range(namedRange);
    this.construct_obj2(content)

  }
  construct_obj2(content: any) {
    content = content.values;
    var current_topics: any[] = []
    var current_header = content[0][1]

    content.forEach((element: any) => {

      if (element[1] == current_header) {
        current_topics.push({ name: element[0], id: element[2] })
      } else {
        //construct new topic
        this.objectives3.push({ category: current_header, topics: current_topics })

        current_header = element[1]
        current_topics = [{ name: element[0], id: element[2] }] //basically clears empty topics
      }

    });
  }

  GoogleDate( JSdate : Date ) { 
    var D = new Date(JSdate) ;
    var Null = new Date(Date.UTC(1899,11,30,0,0,0,0)) ; // the starting value for Google
    return ((D.getTime()  - Null.getTime())/60000 - D.getTimezoneOffset()) / 1440 ;
}
  
}

