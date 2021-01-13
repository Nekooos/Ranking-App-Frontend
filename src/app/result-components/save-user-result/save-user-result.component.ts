import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Competition } from 'src/app/model/Competition';
import { Result } from 'src/app/model/Result';
import { User } from 'src/app/model/User';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-save-user-result',
  templateUrl: './save-user-result.component.html',
  styleUrls: ['./save-user-result.component.scss']
})
export class SaveUserResultComponent {
  result: Result = new Result();
  users: User[];
  user: User;
  competition:Competition;
  selectedUserId: string;
  competitionId: string;

  disciplines: String[] = ["STA", "FEN"]
  cards: String[] = ["WHITE", "YELLOW", "RED"] 

  resultForm = this.formBuilder.group({
    user: [null, Validators.required],
    discipline: [null, Validators.required],
    announcedPerformance: [null, Validators.required],
    reportedPerformance: [null, Validators.required],
    points: [null, Validators.required],
    card: [null, Validators.required],
    remarks: [null, Validators.required],
  });

  constructor(private httpService: HttpService, 
              private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder) {

    this.route.params.subscribe(data => {
      this.competitionId = data['id'];
    }); 

    this.httpService.getAll('user').subscribe(data => {
      this.users = data as User[]
    })

    this.resultForm.valueChanges.subscribe(data => this.onResultFormValueChange(data))
  }

  onResultFormValueChange(data) {
    this.selectedUserId = data.user
    this.result.discipline = data.discipline
    this.result.announcedPerformance = data.announcedPerformance
    this.result.reportedPerformance = data.reportedPerformance
    this.result.points = data.points
    this.result.card = data.card
    this.result.remarks = data.remarks
  }

  onSubmit() {
    this.getCompetition()
  }

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

  saveResult() {
    this.httpService.saveGeneric(this.result, 'result').subscribe(() => {
      const userExists = this.checkUserExists
      
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
  
  editCompetition() {
    this.httpService.editGeneric(this.competition, 'competition', this.competitionId).subscribe(data => {
      this.router.navigate(['competition/id/' + this.competitionId]).then(() => {
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

  checkUserExists(): boolean {
    this.competition.users.forEach(user => {
      if(user.id === this.user.id) {
        return true
      } 
    })
    return false
  }
}
