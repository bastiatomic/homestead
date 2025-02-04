import { Routes } from '@angular/router';
import { MemoryComponent } from './memory/memory.component';
import { ChessComponent } from './chess/chess.component';
import { SlidingComponent } from './archive/sliding/sliding.component';
import { GridAdventureComponent } from './grid-adventure/grid-adventure.component';

export const routes: Routes = [
  { path: '', component: MemoryComponent, title: 'Memory' },
  { path: 'memory', component: MemoryComponent, title: 'Memory' },
  { path: 'chess', component: ChessComponent, title: 'chess' },
  { path: 'sliding', component: SlidingComponent, title: 'sliding' },
  { path: 'grid', component: GridAdventureComponent, title: 'grid' },
];
