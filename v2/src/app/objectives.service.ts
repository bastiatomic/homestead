import { Injectable } from '@angular/core';
import { Objectives } from './Objectives';

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

  getObjectives() {
    return this.mock_objectives;
  }
}
