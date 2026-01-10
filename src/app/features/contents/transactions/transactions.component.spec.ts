import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListData, TransactionsComponent } from './transactions.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MemoizedSelector } from '@ngrx/store';
import { TransactionState } from '../../../../store/reducers/transactions.reducer';
import { selectListData } from '../../../../store/selectors/transactions.selector';

describe('TransactionsComponent', () => {
  let component: TransactionsComponent;
  let fixture: ComponentFixture<TransactionsComponent>;
  let store: MockStore;
  let mockSelectListData: MemoizedSelector<TransactionState, ListData | null>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionsComponent],
      providers: [provideMockStore()],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    mockSelectListData = store.overrideSelector(selectListData, null);

    fixture = TestBed.createComponent(TransactionsComponent);
    component = fixture.componentInstance;

    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //TODO: remove this example test and add real tests
  it('should render an empty list when no entries are present', () => {
    mockSelectListData.setResult(null);
    store.refreshState();
    fixture.detectChanges();

    const listItems = fixture.nativeElement.querySelectorAll('.list-item');
    expect(listItems.length).toBe(0);
  });
});
