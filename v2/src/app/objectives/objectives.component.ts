import { Component } from '@angular/core';
import { Objectives } from '../Objectives';
import { ObjectivesService } from '../objectives.service';

@Component({
  selector: 'app-objectives',
  templateUrl: './objectives.component.html',
  styleUrls: ['./objectives.component.css']
})
export class ObjectivesComponent {

  objectives : Objectives[] = []

  new_objective : Objectives = {
    id: 0,
    name:"",
    category:"",
    createdAt: new Date(),
    solvedAt: new Date()
  }

  constructor(private objs : ObjectivesService){}

  ngOnInit(){
    this.objectives = this.objs.getObjectives();
  }
  send_request(a : Objectives){
    this.objectives.push(a);
    //TODO: send to server
  }
  delete(obj_id : number){
    this.objectives = this.objectives.filter(a => a.id !== obj_id)
    //TODO: send to server
  }

}
