import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UsersComponent } from './user-components/users/users.component';
import { SaveUserComponent } from './user-components/save-user/save-user.component';
import { UserComponent } from './user-components/user/user-profile/user.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompetitionComponent } from './competition-components/competition/competition.component';
import { CompetitionsComponent } from './competition-components/competitions/competitions.component';
import { SaveCompetitionComponent } from './competition-components/save-competition/save-competition.component';
import { ResultComponent } from './result-components/result/result.component';
import { ResultsComponent } from './result-components/results/results.component';
import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { UserResultsComponent } from './user-components/user/user-profile/user-results/user-results.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { NavigationComponent } from './navigation/navigation.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SaveUserResultComponent } from './result-components/save-user-result/save-user-result.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { UserResults } from './model/UserResults';

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
    UserResultsComponent,
    NavigationComponent,
    SaveUserResultComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
