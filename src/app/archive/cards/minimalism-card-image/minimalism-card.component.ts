import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'minimalism-card-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './minimalism-card.component.html',
  styleUrl: './minimalism-card.component.scss',
})
export class MinimalismCardImageComponent {
  @Input() image: string = '';
  @Input() text: string = '';

}
