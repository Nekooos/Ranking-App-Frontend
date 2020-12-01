import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UsersComponent } from './user-components/users/users.component';
import { SaveUserComponent } from './user-components/save-user/save-user.component';
import { UserComponent } from './user-components/user/user.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompetitionComponent } from './competition-components/competition/competition.component';
import { CompetitionsComponent } from './competition-components/competitions/competitions.component';
import { SaveCompetitionComponent } from './competition-components/save-competition/save-competition.component';
import { ResultComponent } from './result-components/result/result.component';
import { ResultsComponent } from './result-components/results/results.component';
import { SaveResultComponent } from './result-components/save-result/save-result.component';
import {MatTableModule} from '@angular/material/table';
import { NavigationComponent } from './layout-components/navigation/navigation.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    UsersComponent,
    SaveUserComponent,
    UserComponent,
    CompetitionComponent,
    CompetitionsComponent,
    SaveCompetitionComponent,
    ResultComponent,
    ResultsComponent,
    SaveResultComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
