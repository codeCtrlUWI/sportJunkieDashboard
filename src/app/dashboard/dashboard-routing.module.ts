/**
 * Created by dylan on 2/27/17.
 */
import { NgModule}  from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { AuthGuard }  from 'app/auth/auth-guard.service';
import { ListArticleComponent } from '../list-article/list-article.component';
import { AddArticleComponent } from '../add-article/add-article.component';
import { ViewArticleComponent } from '../view-article/view-article.component';
import { EditArticleComponent } from '../edit-article/edit-article.component';
import { ScoreBoardComponent } from '../score-boards/score-board.component';

const dashRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], children:[
    {path: '', component: ListArticleComponent},
    {path:'score', component: ScoreBoardComponent},
    {path: 'add', component: AddArticleComponent},
    {path: 'view/:id', component: ViewArticleComponent},
    {path: 'edit/:id', component: EditArticleComponent}
   ]},




];


@NgModule({
  imports: [ RouterModule.forChild(dashRoutes)],
  exports: [RouterModule],
})

export class DashRoutingModule {

}

