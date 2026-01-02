import { Component, inject } from '@angular/core';
import { AbstractModalDialogComponent } from '../../../shared/modal-dialog/modal-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-entry-modal',
  imports: [MatButtonModule, MatDialogTitle, MatDialogContent, MatDialogActions],
  templateUrl: './entry-modal.component.html',
  styleUrl: './entry-modal.component.scss',
})
export class EntryModalComponent extends AbstractModalDialogComponent {
  private matdialogRef = inject(MatDialogRef<EntryModalComponent, string | null>);

  override closeDialog(): void {
    this.matdialogRef.close(null);
  }

  override saveDialog(): void {
    this.matdialogRef.close('save button clicked');
  }
}
