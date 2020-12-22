import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-save-user',
  templateUrl: './save-user.component.html',
  styleUrls: ['./save-user.component.scss']
})
export class SaveUserComponent implements OnInit {

  genders = ['Female', 'Male']
  user: User = new User();

  constructor(private http: HttpService, private router: Router) { }

  ngOnInit(): void {
    
  }

  saveUser() {
    this.http.saveGeneric(this.user, 'user').subscribe(data =>{
      this.router.navigate(['/user/id/', data.id])
    }, error => {
      console.log(error)
    }, () => {
      console.log("saveUser finished")
    }) 
  }

  onSubmitUser() { 
    this.saveUser()
  }
}
