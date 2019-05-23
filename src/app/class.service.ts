import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  // baseUrl:string = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getClasses(): Observable<any>{
    return this.http.get('assets/data/teachings.json', { responseType: 'json' }).pipe(map(res => res['class']));
  }

  // getClassById(_id: number): Observable<any>{
  //   return this.http.get(this.baseUrl + '/class/' + _id);
  // }

  // deleteClassById(_id: number): Observable<any>{
  //   return this.http.delete(this.baseUrl + '/class/' + _id);
  // }

  // updateClassById(_id: number, _class: any): Observable<any>{
  //   return this.http.put(this.baseUrl + '/class/' + _id, _class);
  // }
  
  // addClass(_class: any): Observable<any>{
  //   return this.http.post(this.baseUrl + '/class/', _class);
  // }
}
