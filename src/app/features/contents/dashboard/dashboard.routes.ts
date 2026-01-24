import { Routes } from '@angular/router';
import { provideState } from '@ngrx/store';
import { DashboardComponent } from './dashboard.component';
import {
  DASHBOARD_FEATURE_KEY,
  dashboardReducer,
} from '../../../core/store/reducers/dashboard.reducer';

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    providers: [provideState(DASHBOARD_FEATURE_KEY, dashboardReducer)],
  },
];
