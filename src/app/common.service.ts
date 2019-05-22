import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  getBio(): Observable<any>{
    return this.http.get('assets/data/bio.txt', { responseType: 'text' });
  }

  getResearch(): Observable<any>{
    return this.http.get('assets/data/research.txt', { responseType: 'text' });
  }
}
