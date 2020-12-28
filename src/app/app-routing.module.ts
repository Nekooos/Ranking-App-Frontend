import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { CompetitionComponent } from './competition-components/competition/competition.component';
import { CompetitionsComponent } from './competition-components/competitions/competitions.component';
import { SaveCompetitionComponent } from './competition-components/save-competition/save-competition.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ResultComponent } from './result-components/result/result.component';
import { ResultsComponent } from './result-components/results/results.component';
import { SaveUserResultComponent } from './result-components/save-user-result/save-user-result.component';
import { UserResultsComponent } from './result-components/user-results/user-results.component';
import { SaveUserComponent } from './user-components/save-user/save-user.component';
import { UserComponent } from './user-components/user/user.component';
import { UsersComponent } from './user-components/users/users.component';

const routes: Routes = [
  { path: '', redirectTo: 'competition/all', pathMatch: 'full' },
  { path: 'user/all', component: UsersComponent, pathMatch: 'full' },
  { path: 'user/id/:id', component: UserComponent, pathMatch: 'full' },
  { path: 'user/save', component: SaveUserComponent, pathMatch: 'full' },
  { path: '404', component: PagenotfoundComponent },
  { path: 'competition/save', component: SaveCompetitionComponent, pathMatch: 'full' },
  { path: 'competition/id/:id', component: CompetitionComponent, pathMatch: 'full' },
  { path: 'competition/all', component: CompetitionsComponent, pathMatch: 'full' },
  { path: 'result/id/:id', component: ResultComponent, pathMatch: 'full' },
  { path: 'result/all', component: ResultsComponent, pathMatch: 'full' },
  { path: 'result/edit/:id', component: ResultsComponent, pathMatch: 'full' },
  { path: 'result/save/:id', component: SaveUserResultComponent, pathMatch: 'full' },
  { path: 'result/user-results/:id', component: UserResultsComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/404'}

];

@NgModule({
  imports: [
   
    RouterModule.forRoot(routes)
  ],
  exports: [
   
    RouterModule
  ]
})
export class AppRoutingModule { 
  
}
