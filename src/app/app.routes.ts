import { Routes } from '@angular/router';
import { KlotskiComponent } from './archive/klotski/board/klotski.component';
import { PathbuildingComponent } from './archive/pathbuilding/board/pathbuilding.component';
import { MemoryComponent } from './memory/memory.component';
import { FinanceComponent } from './archive/finance/dashboard.component';
import { ChessComponent } from './archive/chess/chess.component';
import { AboutMeComponent } from './archive/about-me/about-me.component';
import { CardsComponent } from './cards/cards.component';
import { SudokuComponent } from './sudoku/sudoku.component';

export const routes: Routes = [
  { path: '', component: FinanceComponent, title: 'finance' },
  { path: 'klotski', component: KlotskiComponent, title: 'Klotski' },
  { path: 'memory', component: MemoryComponent, title: 'Memory' },
  { path: 'sudoku', component: SudokuComponent, title: 'Sudoku' },
  { path: 'finance', component: FinanceComponent, title: 'finance' },
  { path: 'chess', component: ChessComponent, title: 'chess' },
  { path: 'about-me', component: AboutMeComponent, title: 'About Me' },
  { path: 'cards', component: CardsComponent, title: 'Cards' },
];
