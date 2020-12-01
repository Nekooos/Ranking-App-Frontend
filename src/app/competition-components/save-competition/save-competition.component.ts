import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Competition } from 'src/app/model/Competition';
import { HttpService } from 'src/app/service/http.service';
import { UsersComponent } from 'src/app/user-components/users/users.component';
import { CompetitionsComponent } from '../competitions/competitions.component';

@Component({
  selector: 'app-save-competition',
  templateUrl: './save-competition.component.html',
  styleUrls: ['./save-competition.component.scss']
})
export class SaveCompetitionComponent implements OnInit {
  competition: Competition = new Competition;
  error: string;

  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit(): void {
    
  }

  saveCompetition(competition: Competition) {
    this.httpService.saveGeneric(competition, 'competition').subscribe(data => {
      competition = data as Competition;
      this.router.navigate(['competition/id/', competition.id])
    }), error => {
      console.log(error)
      this.error = error
    }, (data) => {
      console.log("Competition saved ")
    }
  }

  onSubmitCompetition() { 
    this.saveCompetition(this.competition)
  }
}
