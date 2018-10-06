import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Client } from '../../shared/models/client';


@Component({
  selector: 'app-client-details-modal',
  templateUrl: './client-details-modal.component.html',
  styleUrls: ['./client-details-modal.component.scss']
})
export class ClientDetailsModalComponent implements OnInit {

  clientForm: FormGroup;
  formTitle: string;

  constructor(
    public dialogRef: MatDialogRef<ClientDetailsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public client: Client,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.clientForm = this.formBuilder.group({
      name: [this.client.name, Validators.compose([Validators.required, Validators.minLength(5)])],
      email: [this.client.email, Validators.compose([Validators.required, Validators.email])],
      telephone: [this.client.telephone, Validators.required]
    })
  }

}
