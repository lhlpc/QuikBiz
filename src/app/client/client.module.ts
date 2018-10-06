import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule, MatCardTitle, MatCardTitleGroup, MatCardSubtitle } from '@angular/material/card';
import { MatTableModule, MatIconModule, MatToolbarModule, MatTooltipModule, MatMenuModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';

import { AppDialogModule } from '../shared/app-dialog/app-dialog.module';
import { ClientRoutingModule } from './client-routing.module';

import { ClientComponent } from './client.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientSearchComponent } from './client-search/client-search.component';
import { ClientFormModalComponent } from './client-form-modal/client-form-modal.component';
import { ClientDetailsModalComponent } from './client-details-modal/client-details-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppDialogModule,
    ClientRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    MatCardModule,
    MatDialogModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule
  ],
  entryComponents: [ClientFormModalComponent, ClientDetailsModalComponent],
  declarations: [
    ClientComponent,
    ClientListComponent,
    ClientSearchComponent,
    ClientFormModalComponent,
    ClientDetailsModalComponent
  ]
})
export class ClientModule { }
