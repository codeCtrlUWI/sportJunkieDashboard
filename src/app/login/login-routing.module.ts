/**
 * Created by dylan on 2/26/17.
 */
import { NgModule}  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';

import { AuthGuard } from 'app/auth/auth-guard.service';
const loginRoutes: Routes =[
  {path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(loginRoutes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})

export class LoginRoutingModule {}

