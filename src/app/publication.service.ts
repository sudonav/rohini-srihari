import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Publication } from './model/publication';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  baseUrl:string = "http://localhost:3004";

  constructor(private http: HttpClient) { }

  getPublications(): Observable<any>{
    return this.http.get('assets/data/publications.json', { responseType: 'json' }).pipe(map(res => res['publication']));
  }

  deletePublicationById(_id: number): Observable<any>{
    return this.http.delete(this.baseUrl + '/publication/' + _id);
  }

  updatePublicationById(_id: number, publication: any): Observable<any>{
    return this.http.put(this.baseUrl + '/publication/' + _id, publication);
  }
  
  addPublication(publication: any): Observable<any>{
    return this.http.post(this.baseUrl + '/publication/', publication);
  }
}
