import { Component, OnInit, Inject, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { MatDialog } from '@angular/material';

import { ClientFormModalComponent } from '../client-form-modal/client-form-modal.component';
import { ClientDetailsModalComponent } from '../client-details-modal/client-details-modal.component';
import { AppConfirmDialogComponent } from '../../shared/app-dialog/app-confirm-dialog/app-confirm-dialog.component';

import { ClientService } from '../../shared/services/client.service';
import { Client } from '../../shared/models/client';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  @Input() searchedTerm: Subject<string>;
  clients: Client[] = [];
  displayedColumns = ['name', 'email', 'telephone', 'options'];

  constructor(private clientService: ClientService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getClients();
    this.searchedTerm.subscribe(
      (searchTerm) => {
        this.searchClient(searchTerm);
      }
    )
  }

  getClients(): void {
    this.clientService
      .getClients()
      .subscribe(clients => this.clients = clients);
  }

  searchClient(searchedTerm: string): void {
    this.clientService
      .getClients(searchedTerm)
      .subscribe(clients => this.clients = clients)
  }

  openDeleteDialog(client: Client): void {
    const deletionDialogRef = this.dialog
      .open(AppConfirmDialogComponent);

    deletionDialogRef.afterClosed().subscribe(
      isConfirmed => {
        if (isConfirmed === true) {
          this.clientService.deleteClient(client).subscribe(
            () => {
              this.getClients();
            }
          );
        }
      }
    );
  }

  openDetailsDialog(client: Client): void {
    const detailsDialogRef = this.dialog
      .open(ClientDetailsModalComponent, {
        width: '500px',
        data: client
      });
  }

  openEditionDialog(client: Client): void {
    const dialogRef = this.dialog
      .open(ClientFormModalComponent, {
        width: '500px',
        data: client
      });

    dialogRef
      .afterClosed()
      .subscribe(
        editedClient => {
          this.clientService.updateClient(editedClient).subscribe(
            () => {
              this.getClients();
            }
          );
        }
      );
  }
}
