/**
 * Created by dylan on 2/27/17.
 */
import { NgModule}  from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { AuthGuard }  from 'app/auth/auth-guard.service';
import { ListArticleComponent } from '../list-article/list-article.component';
import { AddArticleComponent } from '../add-article/add-article.component';


const dashRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'add', component: AddArticleComponent, canActivate: [AuthGuard] }



];


@NgModule({
  imports: [ RouterModule.forChild(dashRoutes)],
  exports: [RouterModule],
})

export class DashRoutingModule {

}

