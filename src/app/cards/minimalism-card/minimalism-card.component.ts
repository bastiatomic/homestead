import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'minimalism-card',
  standalone: true,
  imports: [],
  templateUrl: './minimalism-card.component.html',
  styleUrl: './minimalism-card.component.scss'
})
export class MinimalismCardComponent {

  @Input() value: string = '';
  @Input() symbol: string = '';

}
