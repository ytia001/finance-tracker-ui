import { createActionGroup, props } from '@ngrx/store';
import { DataEntryRequest } from '../../../app/features/main/entry-modal/entry-modal-control-service/entry-modal-control.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DataEntry } from '../../../app/models/DataEntry';

export const MainResourceActions = createActionGroup({
  source: 'Main [API]',
  events: {
    'Save data entry': props<{ data: DataEntryRequest }>(),
    'Save data entry success': props<{ data: DataEntry }>(),
    'Save data entry failure': props<{ error: HttpErrorResponse }>(),
  },
});
