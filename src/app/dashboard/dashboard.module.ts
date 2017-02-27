/**
 * Created by dylan on 2/26/17.
 */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '@angular/material';
import { DashRoutingModule} from './dashboard-routing.module';
import {AuthGuard} from "../auth/auth-guard.service";

@NgModule({
  imports:[

    FormsModule,
    MaterialModule,
    DashRoutingModule
  ],

  exports: [
    DashboardComponent,
    DashRoutingModule
  ],

  providers: [
    AuthGuard
  ],

  declarations: [
    DashboardComponent
  ]
})

export class DashModule { }



