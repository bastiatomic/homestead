import { Component } from '@angular/core';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent {

  ngOnInit(){
    window.open("https://www.notion.so/Journaling-habits-gratitude-a1c635871ce44374ade13978c7b7c6ae")
  }

}
