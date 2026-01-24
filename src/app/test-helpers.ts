import { Category } from './core/constants/Category';
import { DataEntryRequest } from './features/main/entry-modal/entry-modal-control-service/entry-modal-control.service';

export class TestHelpers {
  static createDateEntryRequest(props?: Partial<DataEntryRequest>): DataEntryRequest {
    return {
      category: Category.INCOME,
      amount: 100,
      date: new Date(),
      ...props,
    };
  }
}
