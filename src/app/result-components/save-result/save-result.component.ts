import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Competition } from 'src/app/model/Competition';
import { Result } from 'src/app/model/Result';
import { User } from 'src/app/model/User';
import { HttpService } from 'src/app/service/http.service';
import { CompetitionComponent } from 'src/app/competition-components/competition/competition.component';
import { CompetitionResult } from 'src/app/model/CompetitionResult';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-save-result',
  templateUrl: './save-result.component.html',
  styleUrls: ['./save-result.component.scss']
})
export class SaveResultComponent implements OnInit {
  competitionComponent: CompetitionComponent;
  result: Result = new Result() ;
  users: User[];
  user: User;
  competitions: Competition[];
  selectedUserId: string;
  competition: Competition;
  competitionId: string;

  getAllCompetitionResultSbscription: Subscription;

  constructor(private httpService: HttpService, 
    private router: Router,
    private route: ActivatedRoute) { 

    this.route.params.subscribe(data => {
      this.competitionId = data['id'];
    }); 
  }

  ngOnInit(): void {
    this.httpService.getAll('user').subscribe(data => {
      this.users = data as User[]
    })
  }

  onSubmitResult() {
    // change to forkjoin
    this.getCompetition()
  }

  //2
  getUser() {
    this.httpService.getUserById('user', this.selectedUserId).subscribe(data => {
      this.user = data
      this.result.user = this.user
      this.result.competition = this.competition
      this.saveResult()
    }, error => {
      console.log(error)
    },() => {
      console.log("getUser Finished")
    })    
  }

  //3
  saveResult() {
    this.httpService.saveGeneric(this.result, 'result').subscribe(() => {
      let userExists = this.checkUserExists
      
      if(!userExists) {
        this.competition.users = this.createUserArray()
        this.editCompetition()
      } else {
        this.router.navigate(['competition/id/' + this.competitionId]).then(() => {
          console.log("navigating to competition")
        })
      }
      
    }, error => {
      console.log(error)
    }, () => {
      console.log('save Result finished')
     
    })
  }
  
  //1
  getCompetition() {
    this.httpService.getById('competition', this.competitionId).subscribe(data => {
      this.competition = data
      this.getUser() 
     
    }, error => {
      console.log(error)
    }, () => {
      console.log("getCompetition")
    })
  }

  //4
  editCompetition() {
    this.httpService.editGeneric(this.competition, 'competition', this.competitionId).subscribe(data => {
      console.log("Edited competition")
      this.router.navigate(['competition/id/' + this.competitionId]).then(() => {
        console.log("navigating to competition")
      })
    }, error => {
      console.log(error)
    }, () => {
      console.log("edit competition finished ")
      
    })
  }

  createUserArray(): User[] {
    let users = [] as User[]
    this.competition.users.forEach(user => users.push(user));
    users.push(this.user)
    return users;
  }

  checkUserExists() {
    this.competition.users.forEach(user => {
      if(user.id === this.user.id) {
        return true
      } 
      return false
    })
  }
}
