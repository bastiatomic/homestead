import { Routes } from '@angular/router';
import { MemoryComponent } from './memory/memory.component';
import { ChessComponent } from './chess/chess.component';
import { SlidingComponent } from './archive/sliding/sliding.component';
import { GridAdventureComponent } from './archive/grid-adventure/grid-adventure.component';
import { HalmaComponent } from './halma/halma.component';

export const routes: Routes = [
  { path: '', component: HalmaComponent, title: 'halma' },
  { path: 'memory', component: MemoryComponent, title: 'Memory' },
  { path: 'chess', component: ChessComponent, title: 'chess' },
  { path: 'sliding', component: SlidingComponent, title: 'sliding' },
  { path: 'grid', component: GridAdventureComponent, title: 'grid' },
  { path: 'halma', component: HalmaComponent, title: 'Halma' },
];
