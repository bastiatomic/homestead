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

  new_objective: Objectives = {
    id: 0,
    name: "",
    category: "",
    createdAt: new Date(),
    solvedAt: new Date()
  }

  constructor(
    private api: GoogleApiService) { }

  send_request(a: Objectives) {
    //this.objectives3.push();
    //TODO: send to server
    //this.GET_sheetsAPI_appendRow("GET_objectives_unsolved")
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
    var old_header = ""

    content.forEach((element: any) => {

      if (element[1] == current_header) {
        current_topics.push({ name: element[0], id: element[2] })
        old_header = element[1]
      } else {
        //construct new topic
        this.objectives3.push({ category: old_header, topics: current_topics })

        current_header = element[1]
        current_topics = []
      }

    });
  }
}

