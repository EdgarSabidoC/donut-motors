import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HTTPMethodsService {

  constructor(private http: HttpClient) { }
  
  getRequest(url: string): Observable<any> {
    return this.http.get(url);
  }

  deleteRequest(url: string): Observable<any> {
    return this.http.delete(url);
  }

  putRequest(url: string, body: { name: string }): Observable<any> {
    return this.http.put(url, body);
  }

  postRequest(url: string, body: { name: string }): Observable<any> {
    return this.http.post(url, body);
  }
}