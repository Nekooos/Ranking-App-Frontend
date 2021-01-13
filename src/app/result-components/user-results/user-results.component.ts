import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { UserResultsDataSource, UserDataResult } from './user-results-datasource';

@Component({
  selector: 'app-user-results',
  templateUrl: './user-results.component.html',
  styleUrls: ['./user-results.component.scss']
})
export class UserResultsComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<UserDataResult>;
  dataSource: UserResultsDataSource;

  displayedColumns = [ 
                      'name',
                      'discipline', 
                      'announcedPerformance', 
                      'reportedPerformance',
                      'points', 
                      'card',
                      'remarks',
                      'date',
                      ];

  constructor(private route: ActivatedRoute, private httpService: HttpService) {
    this.dataSource = new UserResultsDataSource(this.route, this.httpService);
  }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
