import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Client } from '../models/client';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })

export class ClientService {

  private clientsUrl = 'api/clients';  // URL to web api

  constructor(private http: HttpClient) { }

  /** GET Methods */
  getClients(term?: string): Observable<Client[]> {
    let params = new HttpParams();
    if (term && term.length > 0) {
      params = params.append('name', term);
    }
    return this.http.get<Client[]>(this.clientsUrl, { params: params });
  }

  getClient(id: number): Observable<Client> {
    const url = `${this.clientsUrl}/${id}`;
    return this.http.get<Client>(url);
  }

  searchClients(term: string): Observable<Client[]> {
    if (!term.trim()) {
      // if not search term, return empty client array.
      return of([]);
    }
    return this.http.get<Client[]>(`${this.clientsUrl}/?name=${term}`);
  }

  /** Saving Methods */

  /** POST: add a new client to the server */
  addClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.clientsUrl, client, httpOptions);
  }

  /** DELETE: delete the client from the server */
  deleteClient(client: Client | number): Observable<Client> {
    const id = typeof client === 'number' ? client : client.id;
    const url = `${this.clientsUrl}/${id}`;
    return this.http.delete<Client>(url, httpOptions);
  }

  /** PUT: update the client on the server */
  updateClient(client: Client): Observable<any> {
    const id = typeof client === 'number' ? client : client.id;
    const url = `${this.clientsUrl}/${id}`;
    return this.http.put<Client>(url, client, httpOptions);
  }
}
