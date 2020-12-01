import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Competition } from 'src/app/model/Competition';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.scss']
})
export class CompetitionsComponent implements OnInit, OnDestroy {

  competitions: Competition[];
  error: string;
  displayedColumns: string[] = ['name', 'location', 'date']
  subscription: Subscription;

  constructor(private http: HttpService) { 
    this.getAllCompetitions()
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  getAllCompetitions() {
    this.subscription = this.http.getAll('competition').subscribe(data => {
      this.competitions = data as Competition[];
    
      console.log(this.competitions)
      }, error => {
        console.log(error)
        this.error = error;
      }, () => {
        console.log('getAll competitions')
      }
    );
  }

}
