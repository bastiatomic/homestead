import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'minimalism-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './minimalism-card.component.html',
  styleUrl: './minimalism-card.component.scss',
})
export class MinimalismCardComponent {
  @Input() value: string = '';
  @Input() symbol: string = '';
  color: string = '';

  ngOnInit() {
    if (this.symbol == '♡' || this.symbol == '♢') {
      this.color = 'red';
    } else {
      this.color = 'black';
    }
  }
}
