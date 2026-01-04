import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectListEntries } from '../../../../store/selectors/transactions.selector';

export interface ListEntry {
  category: string;
  amount: number;
  date: Date;
}

@Component({
  selector: 'app-transactions',
  imports: [CommonModule, MatListModule, MatIconModule],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss',
})
export class TransactionsComponent {
  private store: Store = inject(Store);

  listEntries$: Observable<ListEntry[]> = this.store.select(selectListEntries);

  // entries: ListEntry[] = [
  //   { category: 'Income', amount: 100, date: new Date() },
  //   { category: 'Expense', amount: 50, date: new Date() },
  // ];
}
