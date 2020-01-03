import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatIconModule, MatButtonModule, MatSidenavModule, MatDividerModule, MatToolbarModule, MatMenuModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatSnackBarModule, MatPaginatorModule, MatSortModule, MatCardModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, MAT_DATE_LOCALE, MatStepperModule, MatSlideToggleModule, MatGridListModule, MatCheckboxModule, MatListModule, MatChipsModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatDividerModule,
    MatToolbarModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatStepperModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatCheckboxModule,
    MatListModule,
    MatChipsModule
  ],
  exports: [
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatDividerModule,
    MatToolbarModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatStepperModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatCheckboxModule,
    MatListModule,
    MatChipsModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' }
  ]
})
export class MaterialModule { }
