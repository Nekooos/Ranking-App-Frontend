import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Result } from 'src/app/model/Result';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  constructor(private httpService: HttpService, private route: ActivatedRoute) { }

  resultId: string;
  result: Result;


  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.resultId = data['id'];
    }); 
    
    this.getById();
  }

  getById() {
    this.httpService.getById('result', this.resultId).subscribe(data => {
      this.result = data as Result
    }, error => {
      console.log(error)
    },() => {
      console.log("getResultById")
    })
  }

}
