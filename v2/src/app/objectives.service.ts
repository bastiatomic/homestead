import { Injectable } from '@angular/core';
import { GoogleApiService } from './google-api.service';
import { Object } from './Objectives';

@Injectable({
  providedIn: 'root'
})
export class ObjectivesService {

  constructor() { }

  objectives_list : Object[] = []

  construct_obj2(content: any) {
    content = content.values;
    var current_topics: any[] = []
    var current_header = content[0][1]

    content.forEach((element: any) => {

      if (element[1] == current_header) {
        current_topics.push({ name: element[0], id: element[2] })
      } else {
        //construct new topic
        this.objectives_list.push({ category: current_header, topics: current_topics })

        current_header = element[1]
        current_topics = [{ name: element[0], id: element[2] }] //basically clears empty topics
      }

    });
  }
}
