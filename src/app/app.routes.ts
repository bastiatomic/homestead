import { Routes } from '@angular/router';
import { KlotskiComponent } from './archive/klotski/board/klotski.component';
import { PathbuildingComponent } from './archive/pathbuilding/board/pathbuilding.component';
import { TestingComponent } from './archive/memory/testing.component';
import { FinanceComponent } from './finance/dashboard.component';
import { ChessComponent } from './chess/chess.component';
import { SudokuComponent } from './archive/sudoku/sudoku.component';

export const routes: Routes = [
    { path: '', component: FinanceComponent, title: "finance"},
    { path: 'sudoku', component: SudokuComponent, title: "sudoku"},
    { path: 'memory', component: TestingComponent, title: "Memory"},
    { path: 'pather', component: PathbuildingComponent, title: "Pather"},
    {path: 'finance', component: FinanceComponent, title: "finance"},
    {path: 'chess', component: ChessComponent, title: "chess"}
];
