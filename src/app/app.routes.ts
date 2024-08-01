import { Routes } from '@angular/router';
import { KlotskiComponent } from './archive/klotski/board/klotski.component';
import { PathbuildingComponent } from './archive/pathbuilding/board/pathbuilding.component';
import { MemoryComponent } from './memory/memory.component';
import { FinanceComponent } from './finance/dashboard.component';
import { ChessComponent } from './chess/chess.component';

export const routes: Routes = [
    { path: '', component: FinanceComponent, title: "finance"},
    { path: 'klotski', component: KlotskiComponent, title: "Klotski"},
    { path: 'memory', component: MemoryComponent, title: "Memory"},
    { path: 'pather', component: PathbuildingComponent, title: "Pather"},
    {path: 'finance', component: FinanceComponent, title: "finance"},
    {path: 'chess', component: ChessComponent, title: "chess"}
];
