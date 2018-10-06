import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule, MatButtonModule } from '@angular/material';

import { AppConfirmDialogComponent } from './app-confirm-dialog/app-confirm-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents: [AppConfirmDialogComponent],
  declarations: [AppConfirmDialogComponent]
})
export class AppDialogModule { }
