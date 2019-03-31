import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  private publicationURL = './assets/data/publications.json';

  constructor(private http: HttpClient) { }

  getPublications(): Observable<any>{
    return this.http.get(this.publicationURL);
  }
}
