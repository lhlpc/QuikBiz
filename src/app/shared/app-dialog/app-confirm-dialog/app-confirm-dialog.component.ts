import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-app-confirm-dialog',
  templateUrl: './app-confirm-dialog.component.html',
  styleUrls: ['./app-confirm-dialog.component.scss']
})
export class AppConfirmDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<AppConfirmDialogComponent>) { }

  ngOnInit() { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
