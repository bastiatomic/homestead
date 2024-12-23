import { Routes } from '@angular/router';
import { MemoryComponent } from './archive/memory/memory.component';
import { ChessComponent } from './chess/chess.component';
import { SlidingComponent } from './archive/sliding/sliding.component';
import { FinanceComponent } from './archive/finance/finance.component';

export const routes: Routes = [
  { path: '', component: MemoryComponent, title: 'Memory' },
  { path: 'memory', component: MemoryComponent, title: 'Memory' },
  { path: 'chess', component: ChessComponent, title: 'chess' },
  { path: 'sliding', component: SlidingComponent, title: 'sliding' },
  { path: 'finance', component: FinanceComponent, title: 'finance' },
];
