import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from 'src/app/model/AppConstants';
import { User } from 'src/app/model/User';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy{

  url = AppConstants.apiUrl;
  users: User[];
  user: User = new User();
  subscription: Subscription;

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe 
    }
  }

  getAllUsers() {
      this.subscription = this.http.getAll('user').subscribe(data => {
      console.log(data)
      this.users = data as User[];
    }, error => {
      console.log(error)
    }, () => {
      console.log(this.users)
    });
  }
}
