import { Component, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  template: `

    <button mat-raised-button color="primary">{{value}}</button>

  `,
  styleUrl: './card.component.scss',
  
})
export class CardComponent {

  @Input() value = "X";

 
}
