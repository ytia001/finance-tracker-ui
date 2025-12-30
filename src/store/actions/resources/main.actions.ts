import { createActionGroup, props } from '@ngrx/store';

export const MainResourceActions = createActionGroup({
  source: 'Main [API]',
  events: {
    'Save data entry success': props<{ data: string }>(),
  },
});
