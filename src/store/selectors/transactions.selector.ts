import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TRANSACTION_FEATURE_KEY, TransactionState } from '../reducers/transactions.reducer';
import { ListEntry } from '../../app/features/contents/transactions/transactions.component';

export const selectTransactionState =
  createFeatureSelector<TransactionState>(TRANSACTION_FEATURE_KEY);

export const selectLoading = createSelector(selectTransactionState, (state) => state.loading);

export const selectListEntries = createSelector(selectTransactionState, (state) => {
  const listEntries: ListEntry[] = [];

  const dataEntries = state.entries;
  if (dataEntries && dataEntries.length > 0) {
    dataEntries.forEach((entry) => {
      listEntries.push({
        category: entry.category,
        amount: Number(entry.amount),
        date: new Date(entry.date),
      });
    });
  }

  return listEntries;
});
