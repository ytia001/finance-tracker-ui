import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TRANSACTION_FEATURE_KEY, TransactionState } from '../reducers/transactions.reducer';
import { ListData } from '../../app/features/contents/transactions/transactions.component';
import { DataEntry } from '../../app/models/DataEntry';
import { Category } from '../../app/constants/Category';
import {
  ListEntry,
  ListGroup,
} from '../../app/features/contents/transactions/transactions-list-group/transactions-list-group.component';

export const selectTransactionState =
  createFeatureSelector<TransactionState>(TRANSACTION_FEATURE_KEY);

export const selectLoading = createSelector(selectTransactionState, (state) => state.loading);

export const selectListData = createSelector(selectTransactionState, (state) =>
  transformToListData(state.entries),
);

const transformToListData = (entries: DataEntry[]): ListData | null => {
  if (!entries) return null;

  const groups: ListGroup[] = [];
  const entryMap = new Map<string, ListEntry[]>();

  // Sort entries by date first to ensure the list appears in order
  const sortedEntries = [...entries].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  sortedEntries.forEach((entry) => {
    // 1. Create a string identifier (e.g., "2023-10-27")
    const dateObj = new Date(entry.date);
    const dateId = dateObj.toISOString().substring(0, 10);

    const amount = Number(entry.amount);
    const isIncome = entry.category === Category.INCOME;

    // 2. Initialize the group if it doesn't exist
    if (!entryMap.has(dateId)) {
      entryMap.set(dateId, []);
      groups.push({
        identifier: dateId,
        inflow: 0,
        outflow: 0,
        netIncome: 0,
      });
    }

    // 3. Update the existing group totals
    const group = groups.find((g) => g.identifier === dateId)!;
    if (isIncome) {
      group.inflow += amount;
    } else {
      group.outflow += amount;
    }
    group.netIncome = group.inflow - group.outflow;

    // 4. Add the entry to the map
    const listEntry: ListEntry = {
      category: entry.category,
      amount: amount,
      date: dateObj,
    };

    entryMap.get(dateId)!.push(listEntry);
  });

  return { groups, entryMap };
};
