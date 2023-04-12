import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarsApi } from '@app/interfaces/cars-api';
import { CarModels } from '@app/interfaces/car-models';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  selectedString: string = '';

  cars = [
    {
      id: 1,
      maker: 'Ford',
      model: 'Fiesta',
      year: 2007,
      color: "Black",
      mileage: 12000,
      description: "",
      transmission: "Automatic",
      category: "Sedan",
      price: 120000,
      dealership: "Donut-Motors Vintage Auto Gallery",
      photo_image: "car-images/1",
      serial_number: 12043932041,
    },
    {
      id: 2,
      maker: 'Chevrolet',
      model: 'Corvette',
      year: 1995,
      color: "Red",
      mileage: 100000,
      description: "",
      transmission: "Automatic",
      category: "Convertible",
      price: 135000,
      dealership: "Donut-Motors Vintage Auto Gallery",
      photo_image: "car-images/2",
      serial_number: 120439120121,
    },
  ];

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
  searchCarsApi = (options: { limit?: string, maker?: string, model?: string, year?: string }): Observable<CarsApi> => {
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

  getCarModels = (): Observable<CarModels> => {
    const headerOptions = new HttpHeaders({
      'X-Parse-Application-Id': 'uO8sRxF6D5OvSwlPfi1gtg7zTJXrzUjJrNcsCFBD', // This is your app's application id
      'X-Parse-REST-API-Key': '8SWmSlYEBUbSNRcyzJ8uCG2bg3tiBAg1PzZj39dU', // This is your app's REST API key
    });

    let params = new HttpParams();

    const apiUrl: string = `https://parseapi.back4app.com/classes/Carmodels_Car_Model_List`;
    const where = encodeURIComponent(JSON.stringify({
      "Make": {
        "$exists": true
      }
    }));

    params = params.set('limit', '10'); // Parámetro que especifica el límite máximo de objetos devueltos en la respuesta.
    params = params.set('order', 'Model'); // Parámetro que especifica el orden de clasificación de los resultados.
    params = params.set('where', where); // Parámetro que especifica la consulta en formato JSON que se aplica a los objetos antes de ser devueltos.

    console.log(apiUrl, { headers: headerOptions, params });
    return this.http.get<CarModels>(apiUrl, { headers: headerOptions, params });
  }
}
