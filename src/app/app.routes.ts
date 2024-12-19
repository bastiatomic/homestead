import { Routes } from '@angular/router';
import { MemoryComponent } from './archive/memory/memory.component';
import { ChessComponent } from './archive/chess/chess.component';
import { SlidingComponent } from './sliding/sliding.component';

export const routes: Routes = [
  { path: '', component: MemoryComponent, title: 'Memory' },
  { path: 'memory', component: MemoryComponent, title: 'Memory' },
  { path: 'chess', component: ChessComponent, title: 'chess' },
  { path: 'sliding', component: SlidingComponent, title: 'sliding' },
];
