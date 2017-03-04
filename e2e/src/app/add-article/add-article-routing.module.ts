import { NgModule}  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddArticleComponent} from 'app/add-article/add-article.component'
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { AuthGuard } from 'app/auth/auth-guard.service';

const routes: Routes =[
    {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    {path: 'addArticle',component:AddArticleComponent, canActivate: [AuthGuard]}




];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class addArticleRouting{}