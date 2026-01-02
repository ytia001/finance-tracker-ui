import { createActionGroup, props } from '@ngrx/store';
import { DataEntryRequest } from '../../../app/features/main/entry-modal/entry-modal-control-service/entry-modal-control.service';

export const MainResourceActions = createActionGroup({
  source: 'Main [API]',
  events: {
    'Save data entry success': props<{ data: DataEntryRequest }>(),
  },
});
