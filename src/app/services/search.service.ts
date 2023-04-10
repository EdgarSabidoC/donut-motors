import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarsApi } from '@app/interfaces/cars-api';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  selectedString: string = '';

  // Constructor de la clase:
  constructor(private http: HttpClient) {
    this.http = http;
  }

  setSelectedString(value: string): void {
    this.selectedString = value;
  }

  getSelectedString(): string {
    return this.selectedString;
  }

  // Método de búsqueda para consumir el servicio utilizando Observables:
  search = (options: { limit?: string, maker?: string, model?: string, year?: string }): Observable<CarsApi> => {
    const headerOptions = new HttpHeaders({
      'X-Api-Key': 'nK7yBNLBYaa4Pdxn+SBxyw==o0jbL22gh3mNk5z6',
    });

    let params = new HttpParams();

    if (options.limit) {
      params = params.set('limit', options.limit) // Parámetro que inidica la cantidad de objetos devueltos.
    }
    if (options.maker) {
      params = params.set('make', options.maker); // Parámetro que realiza la búsqueda por fabricante.
    }

    if (options.model) {
      params = params.set('model', options.model); // Parámetro que realiza la búsqueda por modelo.
    }

    if (options.year) {
      params = params.set('year', options.year); // Parámetro que realiza la búsqueda por año.
    }

    const apiUrl: string = 'https://api.api-ninjas.com/v1/cars';
    console.log(apiUrl, { headers: headerOptions, params });
    return this.http.get<CarsApi>(apiUrl, { headers: headerOptions, params });
  }
}
