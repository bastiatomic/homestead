import { Routes } from '@angular/router';
import { KlotskiComponent } from './games/archive/klotski/board/klotski.component';
import { PathbuildingComponent } from './games/pathbuilding/board/pathbuilding.component';
import { TestingComponent } from './games/testing/testing.component';
import { FinanceComponent } from './finance/dashboard.component';

export const routes: Routes = [
    { path: '', component: FinanceComponent, title: "finance"},
    { path: 'klotski', component: KlotskiComponent, title: "Klotski"},
    { path: 'memory', component: TestingComponent, title: "Memory"},
    { path: 'pather', component: PathbuildingComponent, title: "Pather"},
    {path: 'finance', component: FinanceComponent, title: "finance"}
];
