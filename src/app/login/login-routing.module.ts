/**
 * Created by dylan on 2/26/17.
 */
import { NgModule}  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'app/login/login.component';


const routes: Routes =[
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class LoginRoutingModule {}

