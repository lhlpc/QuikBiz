import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Client } from '../../shared/models/client';


@Component({
  selector: 'app-client-form-modal',
  templateUrl: './client-form-modal.component.html',
  styleUrls: ['./client-form-modal.component.scss']
})
export class ClientFormModalComponent implements OnInit {
  clientForm: FormGroup;
  formTitle: string;

  constructor(
    public dialogRef: MatDialogRef<ClientFormModalComponent>,
    @Inject(MAT_DIALOG_DATA) public client: Client,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    if (this.client === null) {
      this.client = new Client();
    }

    this.clientForm = this.formBuilder.group({
      name: [this.client.name, Validators.compose([Validators.required, Validators.minLength(5)])],
      email: [this.client.email, Validators.compose([Validators.required, Validators.email])],
      telephone: [this.client.telephone, Validators.required]
    })
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onConfirmClick(): void {
    if (this.clientForm.valid) {
      const formData = this.clientForm.value;
      formData.id = this.client.id ? this.client.id : undefined;
      this.dialogRef.close(formData);
    } else {
      console.log("errou");
    }
  }
}
