import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Competition } from '../../model/Competition';
import { User } from '../../model/User';
import { HttpService } from '../../service/http.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userId: string;
  error: String;
  user: User;
  competitions: Competition[];

  constructor(private http: HttpService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.userId = data['id'];
    });

    this.getAllCompetitions()

    this.getById()
  }

  getAllCompetitions() {
    this.http.getAll('competition').subscribe(data => {
      this.competitions = data as Competition[];
      
      }, error => {
        console.log(error)
        this.error = error;
      }, () => {
        console.log('getAll competitions')
      }
    
    );
  }

  getById() {
    this.http.getById('user', this.userId).subscribe(data => {
      this.user = data as User;
      
      }, error => {
        console.log(error)
        this.error = error;
      }, () => {
        console.log('name: ' + this.user.firstName + this.user.lastName + ' id:' + this.userId)
      }
    );
  }

}
