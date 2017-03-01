/**
 * Created by dylan on 2/26/17.
 */
import { NgModule}  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'app/login/login.component';

import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { AuthGuard } from 'app/auth/auth-guard.service';
const routes: Routes =[
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent },

  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }



];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class LoginRoutingModule {}

