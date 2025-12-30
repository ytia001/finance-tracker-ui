import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MainActions } from '../actions/main.actions';
import { catchError, filter, map, of, switchMap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ModalDialogComponent } from '../../app/shared/modal-dialog/modal-dialog.component';
import { MainResourceActions } from '../actions/resources/main.actions';

@Injectable()
export class MainEffects {
  private actions$ = inject(Actions);
  private dialog = inject(MatDialog);

  openAddDataEntryModal$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MainActions.openAddDataEntryModal),
      switchMap(() => {
        const dialogRef = this.dialog.open(ModalDialogComponent, {
          disableClose: true,
          width: '35%',
          height: '55%',
        });

        return dialogRef.afterClosed().pipe(
          filter((result: string | null): result is string => !!result),
          map((result) => MainResourceActions.saveDataEntrySuccess({ data: result })),
          catchError((error) => of(MainActions.error({ error }))),
        );
      }),
    );
  });
}
