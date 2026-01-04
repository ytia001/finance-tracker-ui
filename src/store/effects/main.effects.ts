import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MainActions } from '../actions/main.actions';
import { catchError, filter, map, of, switchMap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MainResourceActions } from '../actions/resources/main.actions';
import { EntryModalComponent } from '../../app/features/main/entry-modal/entry-modal.component';
import { ModalConstants } from '../../app/constants/Modal';
import { DataEntryRequest } from '../../app/features/main/entry-modal/entry-modal-control-service/entry-modal-control.service';
import { MainService } from '../../app/services/main.services';

@Injectable()
export class MainEffects {
  private actions$ = inject(Actions);
  private dialog = inject(MatDialog);
  private service = inject(MainService);

  openAddDataEntryModal$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MainActions.openAddDataEntryModal),
      switchMap(() => {
        const dialogRef = this.dialog.open(EntryModalComponent, {
          disableClose: true,
          width: ModalConstants.MODAL_WIDTH_PERCENTAGE,
          height: ModalConstants.MODAL_HEIGHT_PERCENTAGE,
        });

        return dialogRef.afterClosed().pipe(
          filter((result: DataEntryRequest | null): result is DataEntryRequest => !!result),
          map((result) => {
            return MainResourceActions.saveDataEntry({ data: result });
          }),
          catchError((error) => of(MainActions.error({ error }))),
        );
      }),
    );
  });

  saveDataEntry$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MainResourceActions.saveDataEntry),
      switchMap(({ data }) =>
        this.service.create(data).pipe(
          map((response) => MainResourceActions.saveDataEntrySuccess({ data: response })),
          catchError((error) => of(MainResourceActions.saveDataEntryFailure({ error }))),
        ),
      ),
    );
  });
}
