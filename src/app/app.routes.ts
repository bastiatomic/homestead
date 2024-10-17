import { Routes } from '@angular/router';
import { KlotskiComponent } from './archive/klotski/board/klotski.component';
import { MemoryComponent } from './archive/memory/memory.component';
import { ChessComponent } from './archive/chess/chess.component';
import { SudokuComponent } from './archive/sudoku/sudoku.component';
import { SlidingComponent } from './sliding/sliding.component';

export const routes: Routes = [
  { path: '', component: MemoryComponent, title: 'Memory' },
  { path: 'sliding', component: SlidingComponent, title: 'Sliding' },
  { path: 'memory', component: MemoryComponent, title: 'Memory' },
  { path: 'sudoku', component: SudokuComponent, title: 'Sudoku' },
  { path: 'chess', component: ChessComponent, title: 'chess' },
];
