import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DASHBOARD_FEATURE_KEY, DashboardState } from '../reducers/dashboard.reducer';

export const selectDashboardState = createFeatureSelector<DashboardState>(DASHBOARD_FEATURE_KEY);

export const selectLoading = createSelector(selectDashboardState, (state) => state.loading);
