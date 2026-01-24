import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import {
  ListEntry,
  ListGroup,
  ListGroupData,
  ListGroupIdentifier,
  TransactionsListGroupComponent,
} from './transactions-list-group/transactions-list-group.component';
import { selectListData } from '../../../core/store/selectors/transactions.selector';

export interface ListData {
  groups: ListGroup[];
  entryMap: Map<ListGroupIdentifier, ListEntry[]>;
}

@Component({
  selector: 'app-transactions',
  imports: [CommonModule, TransactionsListGroupComponent, MatListModule, MatIconModule],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss',
})
export class TransactionsComponent {
  private store: Store = inject(Store);

  listData$: Observable<ListData | null> = this.store.select(selectListData);

  listGroupData$: Observable<ListGroupData[]> = this.listData$.pipe(
    map((listData) => this.transformListDataToListGroupData(listData)),
  );

  private transformListDataToListGroupData(data: ListData | null): ListGroupData[] {
    if (!data) {
      return [];
    }

    return data.groups.map((group) => {
      return {
        group: group,
        entries: data.entryMap.get(group.identifier) ?? [],
      } as ListGroupData;
    });
  }
}
