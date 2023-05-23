import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HTTPMethodsService {

  constructor(private http: HttpClient) { }
  httpOptions = {
  	headers: new HttpHeaders({
    	'Content-Type': 'application/json',
  	}), withCredentials: true,
	};
  
  getRequest(url: string): Observable<any> {
    return this.http.get(url);
  }

  deleteRequest(url: string): Observable<any> {
    return this.http.delete(url, this.httpOptions);
  }

  putRequest(url: string, body: { name: string }): Observable<any> {
    return this.http.put(url, body, this.httpOptions);
  }

  postRequest(url: string, body: { name: string }): Observable<any> {
    return this.http.post(url, body, this.httpOptions);
  }

  getRequestPDF(url: string, body: any): Observable<any> {
    const options = {
      ...this.httpOptions,
      body: JSON.stringify(body)
    };
    return this.http.get(url, options);
  }
}