import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mapping } from '../Board';

@Component({
  selector: 'app-pawn-promotion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pawn-promotion.component.html',
  styleUrl: './pawn-promotion.component.scss'
})
export class PawnPromotionComponent {

  @Input() visibleIdentifier: string = "";
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  Mapping = Mapping;

  blackPromotionFenIdentifier = [
    "r", "n", "b", "q"
  ]

  whitePromotionFenIdentifier = [
    "R", "N", "B", "Q"
  ]

}
