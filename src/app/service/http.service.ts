import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { stringify } from 'querystring';
import { Observable, of } from 'rxjs';
import { AppConstants } from '../model/AppConstants';
import { CompetitionResult } from '../model/CompetitionResult';
import { User } from '../model/User';
import { UserResults } from '../model/UserResults';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { 

  }

  private url: string = AppConstants.apiUrl;

  getAll(subject: string): Observable<any[]> {
    return this.http.get<any[]>(this.url + subject + '/all').pipe(
      catchError(this.handleError<any[]>('getAll', []))
    );
  }

  getById(subject: string, id: string): Observable<any> {
    return this.http.get<any>(this.url + subject + '/' + id).pipe(
        
    )
  }

  getUserById(subject: string, id: string): Observable<User> {
    return this.http.get<any>(this.url + 'user/' + id).pipe(
        
    )
  }

  getByUrl(url: string): Observable<any>{
    return this.http.get<any>(url);
  }

  getByParameter<T>(path: string, value:string): Observable<T>{
    return this.http.get<T>(this.url + path + '?=' + value);
  }

  saveGeneric<T>(object:T, path:string): Observable<T> {
    const headers = { 'content-type': 'application/json'}  
    const body = JSON.stringify(object);
    return this.http.post<T>(this.url + path + '/save', body, {'headers':headers})
  }

  editGeneric<T>(object:T, path: string, id: string): Observable<T> {
    const headers = { 'content-type': 'application/json'}  
    const body = JSON.stringify(object);
    return this.http.put<T>(this.url + path + '/put/' +id, body, {'headers': headers});
  }

  delete(id:string , path: string) { 
    return this.http.delete(this.url + path + '/delete/' +id);
  }

  getCompetitionResults(id: string): Observable<CompetitionResult[]> {
    return this.http.get<CompetitionResult[]>(this.url + "result/competition-results/"+id)
  }

  getUserResults(id:String): Observable<UserResults[]> {
    return this.http.get<UserResults[]>(this.url + "user/user-results/"+id)
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      console.error(error); 

      return of(result as T);
    };
  }

}
