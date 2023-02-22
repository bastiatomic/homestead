import { Injectable } from '@angular/core';
import { Objectives } from './Objectives';
import { Objectives2 } from './Objectives2';

@Injectable({
  providedIn: 'root'
})
export class ObjectivesService {

  constructor() { }

  mock_objectives: Objectives[] = [
    { id: -1, name: "hello", category: "topics", createdAt: new Date(), solvedAt: new Date() },
    { id: 0, name: "hello2", category: "topics", createdAt: new Date(), solvedAt: new Date() },
    { id: 1, name: "hello", category: "topics", createdAt: new Date(), solvedAt: new Date() },
    { id: 2, name: "hello", category: "topics", createdAt: new Date(), solvedAt: new Date() },
    { id: -1, name: "hello", category: "vacations", createdAt: new Date(), solvedAt: new Date() },
    { id: 3, name: "hello", category: "vacations", createdAt: new Date(), solvedAt: new Date() },
    { id: 4, name: "hello", category: "vacations", createdAt: new Date(), solvedAt: new Date() },
    { id: -1, name: "hello", category: "active in ffm", createdAt: new Date(), solvedAt: new Date() },
    { id: 5, name: "hello", category: "active in ffm", createdAt: new Date(), solvedAt: new Date() },
    { id: 6, name: "hello3", category: "active in ffm", createdAt: new Date(), solvedAt: new Date() }
  ]


  mock_objectives2 : Objectives2[] = [
    {
      category: "active in ffm",
      topics: [
        {
          id: 0, name: "axtwerfen", createdAt: new Date(), solvedAt: new Date()
        },
        { id: 1, name: "english theater", createdAt: new Date(), solvedAt: new Date() },
        {
          id: 2, name: "palmengarten", createdAt: new Date(), solvedAt: new Date(),
        }
      ]
    },
    {
      category: "household",
      topics: [
        {
          id: 3, name: "putzen", createdAt: new Date(), solvedAt: new Date()
        },
        { id: 4, name: "wintergarten", createdAt: new Date(), solvedAt: new Date() },
        {
          id: 5, name: "sherwin ärgern", createdAt: new Date(), solvedAt: new Date(),
        }
      ]
    },
    {
      category: "misc",
      topics: [
        {
          id: 6, name: "db is fun", createdAt: new Date(), solvedAt: new Date()
        },
        { id: 7, name: "move screen", createdAt: new Date(), solvedAt: new Date() },
        {
          id: 8, name: "i like to move it move it", createdAt: new Date(), solvedAt: new Date(),
        }
      ]
    }


  ]


  /*
1 {
  category: ...,
  topics: []
}
*/
  getObjectives() {
    return this.mock_objectives;
  }
  getObjectives2() {
    return this.mock_objectives2;
  }
  reload_page(a: Objectives[]) {

  }
}
