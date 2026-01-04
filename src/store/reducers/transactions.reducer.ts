import { createReducer, on } from '@ngrx/store';
import { DataEntry } from '../../app/models/DataEntry';
import { MainResourceActions } from '../actions/resources/main.actions';

export const TRANSACTION_FEATURE_KEY = 'transaction';

export interface TransactionState {
  loading: boolean;
  entries: DataEntry[];
}

export const initialState: TransactionState = {
  loading: false,
  entries: [],
};

export const transactionReducer = createReducer(
  initialState,

  on(MainResourceActions.saveDataEntrySuccess, (state, { data }) => ({
    ...state,
    entries: [...state.entries, data],
  })),
);
