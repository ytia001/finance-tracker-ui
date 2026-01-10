import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

export interface ListGroupData {
  group: ListGroup;
  entries: ListEntry[];
}

export interface ListGroup {
  identifier: ListGroupIdentifier;
  inflow: number;
  outflow: number;
  netIncome: number;
}

export interface ListEntry {
  category: string;
  amount: number;
  date: Date;
}

export type ListGroupIdentifier = string;

@Component({
  selector: 'app-transactions-list-group',
  imports: [CommonModule, MatIconModule, MatListModule],
  templateUrl: './transactions-list-group.component.html',
  styleUrl: './transactions-list-group.component.scss',
})
export class TransactionsListGroupComponent implements OnInit {
  @Input()
  listGroupData: ListGroupData | null = null;

  listGroup: ListGroup | null = null;
  listEntry: ListEntry[] = [];

  ngOnInit(): void {
    if (this.listGroupData) {
      this.listGroup = this.listGroupData.group;
      this.listEntry = this.listGroupData.entries;
    }
  }
}
