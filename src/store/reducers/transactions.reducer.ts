import { createReducer } from '@ngrx/store';

export const TRANSACTION_FEATURE_KEY = 'transaction';

export interface TransactionState {
  loading: boolean;
}

export const initialState: TransactionState = {
  loading: false,
};

export const transactionReducer = createReducer(initialState);
