import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { Competition } from '../model/Competition';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  subscriptions: Subscription[];

  constructor(private httpService: HttpService) { }


  getById(id: string, path: string): any {
    this.subscriptions.push(this.httpService.getById(id, 'competition').subscribe(data => {
      return data as Competition
    }));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(Subscription => Subscription.unsubscribe)
  }
}


