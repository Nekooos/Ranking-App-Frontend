import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { UserResults } from 'src/app/model/UserResults';
import { User } from '../../../model/User';
import { HttpService } from '../../../service/http.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userId: string;
  error: String;
  user: User;
  userResults: UserResults[];
  displayedColumns: string[] = ['competition', 
                                'date', 
                                'endDate', 
                                'announcedPerformance',
                                'reportedPerformance', 
                                'points', 
                                'card',
                                'remarks',
                                ]

  constructor(private http: HttpService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.userId = data['id'];
    });

    this.http.getById('user', this.userId).subscribe(data => {
      this.user = data as User;
    })
    
    /*
    const observables$ = [this.http.getUserResults(this.userId), this.http.getById('user', this.userId)]

    forkJoin(observables$).subscribe(([userResults, user]) => {
      console.log(userResults, user)
      this.userResults = userResults as UserResults[]
      this.user = user as User
    }, error => { 
      console.log(error)
    }, () => {
      console.log("getUserResults and getUser complete")
    })
    */
  }
}
