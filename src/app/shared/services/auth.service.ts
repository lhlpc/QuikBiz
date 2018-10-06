import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserData } from '../models/user-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  isLoggedIn(): boolean {
    const userData = this.getUserData()
    return (!!userData && !!userData.token);
  }

  login(username: string, password: string): Observable<UserData> {
    return new Observable(
      (observer) => {
        if(username.length === 0 || password.length === 0) {
          observer.error('Login Inválido');
        } else {
          const user: UserData = {id: '1', name: 'luiz', email: 'lll', telephone: 'sdsd', token: 'sdsd'}
          localStorage.setItem('userData', JSON.stringify(user));
          observer.next(user);
          observer.complete();
        }
      }
    )    
  }

  logout(): void {
    localStorage.removeItem('userData');
  }

  getUserData(): UserData {
    return <UserData>JSON.parse(localStorage.getItem('userData'));
  }
}
