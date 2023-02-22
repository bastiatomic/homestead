import { Component } from '@angular/core';
import { Objectives } from '../Objectives';
import { ObjectivesService } from '../objectives.service';
import { Objectives2 } from '../Objectives2';

@Component({
  selector: 'app-objectives',
  templateUrl: './objectives.component.html',
  styleUrls: ['./objectives.component.css']
})
export class ObjectivesComponent {

  objectives: Objectives[] = []
  objectives2: Objectives2[] = []

  new_objective: Objectives = {
    id: 0,
    name: "",
    category: "",
    createdAt: new Date(),
    solvedAt: new Date()
  }

  constructor(private objs: ObjectivesService) { }

  ngOnInit() {
    this.objectives = this.objs.getObjectives();
    this.objectives2 = this.objs.getObjectives2();
  }
  send_request(a: Objectives) {
    this.objectives.push(a);
    //TODO: send to server
  }
  delete(obj_id: number) {
    this.objectives = this.objectives.filter(a => a.id !== obj_id)
    //TODO: send to server
  }
   delete2(obj_id : number) {
    console.log(obj_id)
    this.objectives2 = this.objectives2.filter(obj => {
      obj.topics = obj.topics.filter(topic => topic.id !== obj_id);
      return obj.topics.length > 0;
    });
  }
}
