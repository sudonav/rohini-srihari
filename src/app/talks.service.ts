import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TalksService {

  baseUrl:string = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getTalks(): Observable<any>{
    return this.http.get('assets/data/talks.json', { responseType: 'json' }).pipe(map(res => res['talks']));
  }

  // getTalkById(_id: number): Observable<any>{
  //   return this.http.get(this.baseUrl + '/talk/' + _id);
  // }

  // deleteTalkById(_id: number): Observable<any>{
  //   return this.http.delete(this.baseUrl + '/talk/' + _id);
  // }

  // updateTalkById(_id: number, talk: any): Observable<any>{
  //   return this.http.put(this.baseUrl + '/talk/' + _id, talk);
  // }
  
  // addTalk(talk: any): Observable<any>{
  //   return this.http.post(this.baseUrl + '/talk/', talk);
  // }
}
 