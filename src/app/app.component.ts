import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

import { CardComponent } from './games/archive/memory/card/card.component';
import { BoardComponent } from './games/archive/memory/board/board.component';
import { GameComponent } from './games/archive/memory/game/game.component';
import { NavbarComponent } from './games/archive/memory/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { KlotskiComponent } from './games/archive/klotski/board/klotski.component';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, MatButton, CommonModule, RouterOutlet,KlotskiComponent, CardComponent, BoardComponent, GameComponent, NavbarComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'memorySPA';
}
