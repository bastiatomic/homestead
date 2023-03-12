import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {

  list = []

  constructor() { }

  construct_groups(a: any){
    this.list = a
  }
}
