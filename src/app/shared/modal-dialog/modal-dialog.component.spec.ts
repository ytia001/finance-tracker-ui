import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { ModalDialogComponent } from './modal-dialog.component';
import { MatDialogRef } from '@angular/material/dialog';

describe('ModalDialogComponent', () => {
  let component: ModalDialogComponent;
  let fixture: ComponentFixture<ModalDialogComponent>;
  let matDialogRefSpy: jasmine.SpyObj<MatDialogRef<ModalDialogComponent>>;

  beforeEach(async () => {
    matDialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);

    await TestBed.configureTestingModule({
      imports: [ModalDialogComponent],
      providers: [{ provide: MatDialogRef, useValue: matDialogRefSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call dialogRef.close() when closeDialog is called', () => {
    component.closeDialog();
    expect(matDialogRefSpy.close).toHaveBeenCalledWith(null);
  });

  it('should call dialogRef.close() with data when saveDialog is called', () => {
    component.saveDialog();
    expect(matDialogRefSpy.close).toHaveBeenCalledWith('save button clicked');
  });
});
