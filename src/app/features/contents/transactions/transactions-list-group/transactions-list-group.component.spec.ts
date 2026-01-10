import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGroupData, TransactionsListGroupComponent } from './transactions-list-group.component';

describe('TransactionsListGroupComponent', () => {
  let component: TransactionsListGroupComponent;
  let fixture: ComponentFixture<TransactionsListGroupComponent>;

  const mockListGroupData: ListGroupData = {
    group: {
      identifier: '2026-01',
      inflow: 1000,
      outflow: 500,
      netIncome: 500,
    },
    entries: [{ category: 'Groceries', amount: 50, date: new Date() }],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionsListGroupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionsListGroupComponent);
    component = fixture.componentInstance;

    component.listGroupData = mockListGroupData;

    fixture.detectChanges();

    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
