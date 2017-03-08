/**
 * Created by dylan on 2/25/17.
 */
import { NgModule } from '@angular/core'
import {  Routes ,RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth/auth-guard.service';

const appRoutes: Routes =[
  {path: '', redirectTo: '/login', pathMatch: 'full' },
    {path: 'login', component:LoginComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}





