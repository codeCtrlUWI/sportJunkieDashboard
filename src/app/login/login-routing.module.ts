/**
 * Created by dylan on 2/26/17.
 */
import { NgModule}  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from 'app/auth/auth-guard.service';
const loginRoutes: Routes =[
  {path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forChild(loginRoutes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})

export class LoginRoutingModule {}

