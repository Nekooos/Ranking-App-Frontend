import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/model/Result';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  results: Result[];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getAllResults();
  }

  getAllResults() {
    this.httpService.getAll('result').subscribe(data => {
      console.log(data)
      this.results = data as Result[];
      console.log(this.results)
    }, error => {
      console.log(error)
    })
  }

}
