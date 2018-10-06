import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserData } from '../shared/models/user-data';
import { Router } from '@angular/router';

import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() { }

  login(loginForm: NgForm): void  {
    this.authService
      .login(loginForm.value.email, loginForm.value.password)
      .subscribe(
        (user: UserData) => {
          this.router.navigateByUrl('clients');
        }
      );
  }
}
