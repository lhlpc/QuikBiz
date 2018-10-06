import { Component, OnInit, EventEmitter } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { MatDialog } from '@angular/material';

import { ClientFormModalComponent } from './client-form-modal/client-form-modal.component';
import { ClientService } from '../shared/services/client.service';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  changedTermSubject: Subject<string> = new Subject<string>();

  constructor(
    private authService: AuthService,
    private router: Router,
    private clientService: ClientService,
    public dialog: MatDialog) { }

  ngOnInit() {
  }

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('login');
  }

  refreshClientList(searchTerm) {
    this.changedTermSubject.next(searchTerm);
  }

  newClient() {
    const dialogRef = this.dialog
      .open(ClientFormModalComponent, {
        width: '500px'
      });

    dialogRef
      .afterClosed()
      .subscribe(
        newClient => {
          this.clientService.addClient(newClient).subscribe(
            () => {
              this.changedTermSubject.next();
            }
          );
        }
      );
  }
}
