import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuardService } from './shared/services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        redirectTo: '/clients',
        pathMatch: 'full'
      },
      {
        path: 'clients',
        loadChildren: './client/client.module#ClientModule'
      },
      {
        path: 'login',
        loadChildren: './login/login.module#LoginModule'
      }
    ],
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class RoutingModule { }
