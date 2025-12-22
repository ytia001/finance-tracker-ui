import { Routes } from '@angular/router';
import { MainComponent } from './features/main/main.component';
import { DashboardComponent } from './features/contents/dashboard/dashboard.component';
import { BreakdownComponent } from './features/contents/breakdown/breakdown.component';
import { ConfigurationComponent } from './features/contents/configuration/configuration.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'breakdown', component: BreakdownComponent },
      { path: 'configuration', component: ConfigurationComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];
