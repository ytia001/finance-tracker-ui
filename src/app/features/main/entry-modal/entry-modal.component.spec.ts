import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntryModalComponent } from './entry-modal.component';
import { MatDialogRef } from '@angular/material/dialog';

describe('EntryModalComponent', () => {
  let component: EntryModalComponent;
  let fixture: ComponentFixture<EntryModalComponent>;
  let matDialogRefSpy: jasmine.SpyObj<MatDialogRef<EntryModalComponent>>;

  beforeEach(async () => {
    matDialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);

    await TestBed.configureTestingModule({
      imports: [EntryModalComponent],
      providers: [{ provide: MatDialogRef, useValue: matDialogRefSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(EntryModalComponent);
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
