/**
 * Created by dylan on 2/25/17.
 */

import {  Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth/auth-guard.service';
export const routes: Routes =[
    {path: '', redirectTo: '/login', pathMatch: 'full' },
    {path: 'login',component: LoginComponent},
    {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }
];

