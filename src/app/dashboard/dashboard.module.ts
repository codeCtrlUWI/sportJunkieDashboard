/**
 * Created by dylan on 2/26/17.
 */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports:[

    FormsModule,
    MaterialModule
  ],

  exports: [
    DashboardComponent
  ],
  declarations: [
    DashboardComponent
  ]
})

export class DashModule { }



