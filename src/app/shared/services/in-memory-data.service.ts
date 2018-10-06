import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Client } from '../models/client';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const clients = [
      { id: 1, name: 'José Luiz', email: 'joseluiz@gmail.com', telephone: '79999999999' },
      { id: 2, name: 'Maria Luiza', email: 'marialuiza@gmail.com', telephone: '79999009999' },
      { id: 3, name: 'Antônio', email: 'antonio@gmail.com', telephone: '79999990099' },
      { id: 4, name: 'João', email: 'joao@gmail.com', telephone: '79999988888' },
      { id: 5, name: 'Maria', email: 'maria@gmail.com', telephone: '79999999999' },
      { id: 6, name: 'Leonardo', email: 'leonardo@gmail.com', telephone: '79999999999' },
      { id: 7, name: 'Joaquim', email: 'joaquim@gmail.com', telephone: '79988999999' },
      { id: 8, name: 'Vitória', email: 'vitoria@gmail.com', telephone: '79789999999' },
      { id: 9, name: 'Lohanny', email: 'lohanny@gmail.com', telephone: '79899999999' },
      { id: 10, name: 'Felipe', email: 'felipe@gmail.com', telephone: '79689999999' },
    ];
    return {clients};
  }
}