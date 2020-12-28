import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Competition } from 'src/app/model/Competition';
import { CompetitionResult } from 'src/app/model/CompetitionResult';
import { Result } from 'src/app/model/Result';
import { User } from 'src/app/model/User';
import { ResultsComponent } from 'src/app/result-components/results/results.component';
import { HttpService } from 'src/app/service/http.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.scss']
})
export class CompetitionComponent implements OnInit, OnDestroy {

  competitionId: string;
  competition: Competition;
  result: Result = new Result()
  users: User[];
  user: User;
  selectedUserId: Number;
  filterDisciplines: String[];
  competitionResult: CompetitionResult[];

  displayedColumns: string[] = ['number', 
                                'name', 
                                'discipline', 
                                'announcedPerformance',
                                'reportedPerformance', 
                                'points', 
                                'card',
                                'remarks',
                                'approve',
                                'edit',
                                'delete']

  subscription: Subscription;
  routeSubscription: Subscription;

  constructor(private httpService: HttpService, private route: ActivatedRoute, private router: Router) {
   
    this.routeSubscription = this.route.params.subscribe(data => {
      this.competitionId = data['id'];
    });
  }

  ngOnInit(): void {
    this.getCompetitionById();
    this.getCompetitionResults()

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe
  }

  getCompetitionResults() {
    this.subscription = this.httpService.getCompetitionResults(this.competitionId).subscribe(data => {
      this.competitionResult = data as CompetitionResult[]
      this.competitionResult = this.addPositionToResult(this.competitionResult)
      console.log(data)
    })
  }

  getCompetitionById() {
    this.httpService.getById('competition', this.competitionId).subscribe(data => {
      this.competition = data as Competition;
      console.log(this.competition)
      this.users = this.competition.users as User[];
      console.log(this.users);
    })
  }

  onDeleteResult(result: CompetitionResult) {
    this.httpService.delete(String(result.result_id), 'result').subscribe(() => {
      this.httpService.getCompetitionResults(this.competitionId).subscribe(data => {
        this.competitionResult = this.addPositionToResult(data as CompetitionResult[])
      })
    })
  }

  addPositionToResult(competitionResult: CompetitionResult[]): CompetitionResult[] {
    for(let i = 0; i < competitionResult.length; i++) {
       competitionResult[i].position = i+1;
    }
    return competitionResult
  }
  
  changeCardColor() {
    
  }
}
