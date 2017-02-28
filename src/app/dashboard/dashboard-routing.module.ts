/**
 * Created by dylan on 2/27/17.
 */
import {  NgModule}  from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { AuthGuard }  from 'app/auth/auth-guard.service';

const appRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },

];


NgModule({
  imports: [ RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})

export class DashRoutingModule {}

