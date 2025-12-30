import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-dialog',
  imports: [MatButtonModule, MatDialogTitle, MatDialogContent, MatDialogActions],
  templateUrl: './modal-dialog.component.html',
  styleUrl: './modal-dialog.component.scss',
})
export class ModalDialogComponent {
  public dialogRef = inject(MatDialogRef<ModalDialogComponent>);

  closeDialog(): void {
    this.dialogRef.close(null);
  }

  saveDialog(): void {
    this.dialogRef.close('save button clicked');
  }
}
