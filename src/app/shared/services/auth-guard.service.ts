import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (state.url.toString().indexOf('login') !== -1) {
      if (this.authService.isLoggedIn()) {
        this.router.navigateByUrl('clients')
        return false;
      } else {
        return true;
      }
    } else {

      if (!this.authService.isLoggedIn()) {
        this.router.navigateByUrl('login')
        return false;
      } else {
        return true;
      }
    }

  }
}
