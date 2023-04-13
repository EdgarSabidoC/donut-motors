/**
 * Componente que representa un servicio de búsqueda de autos.
 * Este componente utiliza Observables para realizar la búsqueda y devuelve un objeto CarsApi.
 * Aún no está completo.
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarsApi } from '@app/interfaces/cars-api';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  queryString: string = ''; // Consulta de búsqueda

  // Lista de autos disponibles
  cars = [
    {
      id: 1,
      maker: 'Ford',
      model: 'Fiesta',
      year: 2007,
      color: "Black",
      mileage: 12000,
      description: "",
      condition: "Mint",
      transmission: "Automatic",
      category: "Sedan",
      price: 12000,
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
      condition: "Excellent",
      transmission: "Manual",
      category: "Convertible",
      price: 13500,
      dealership: "Donut-Motors Vintage Auto Gallery",
      photo_image: "car-images/2",
      serial_number: 120439120121,
    },
    {
      id: 3,
      maker: 'Nissan',
      model: 'GT-R',
      year: 2010,
      color: "Black",
      mileage: 150000,
      description: "",
      condition: "Good",
      transmission: "Automatic",
      category: "Convertible",
      price: 14000,
      dealership: "Donut-Motors Vintage Auto Gallery",
      photo_image: "car-images/3",
      serial_number: 1204301278391,
    },
    {
      id: 4,
      maker: 'Mazda',
      model: 'MX-30',
      year: 2010,
      color: "Grey",
      mileage: 5000,
      description: "",
      condition: "Fair",
      transmission: "Automatic",
      category: "SUV",
      price: 20000,
      dealership: "Donut-Motors Cars Emporium",
      photo_image: "car-images/4",
      serial_number: 12021091290421,
    },
  ];

  // Opciones de categoría de auto
  categorypOptions = [
    { value: 'SUV', label: 'SUV' },
    { value: 'Sedan', label: 'Sedan' },
    { value: 'Hatchback', label: 'Hatchback' },
    { value: 'Pickup', label: 'Pickup' },
    { value: 'Coupe', label: 'Coupe' },
    { value: 'Minivan', label: 'Minivan' },
    { value: 'Convertible', label: 'Convertible' },
    { value: 'Wagon', label: 'Wagon' },
    { value: 'Van', label: 'Van' },
  ];

  // Opciones de color de auto
  colorOptions = [
    { value: 'White', label: 'White' },
    { value: 'Blue', label: 'Blue' },
    { value: 'Black', label: 'Black' },
    { value: 'Silver', label: 'Silver' },
    { value: 'Red', label: 'Red' },
    { value: 'Gold', label: 'Gold' },
    { value: 'Green', label: 'Green' },
    { value: 'Yellow', label: 'Yellow' },
    { value: 'Orange', label: 'Orange' },
    { value: 'Grey', label: 'Grey' },
  ];

  // Opciones de fabricantes de autos
  makerOptions = [
    { value: 'Chevrolet', label: 'Chevrolet' },
    { value: 'Ford', label: 'Ford' },
    { value: 'Mazda', label: 'Mazda' },
    { value: 'Nissan', label: 'Nissan' },
    { value: 'Peugeot', label: 'Peugeot' },
  ];

  // Opciones de sedes de Donut-Motors:
  dealershipOptions = [
    { value: 'Donut-Motors Cars Emporium', label: 'Donut-Motors Cars Emporium' },
    { value: 'Donut-Motors Vintage Auto Gallery', label: 'Donut-Motors Vintage Auto Gallery' },
    { value: 'Donut-Motors Automobile Dealership', label: 'Donut-Motors Automobile Dealership' },
    { value: 'Donut-Motors Retro Ride Showroom', label: 'Donut-Motors Retro Ride Showroom' },
    { value: 'Donut-Motors Timeless Car Boutique', label: 'Donut-Motors Timeless Car Boutique' },
  ];

  // Opciones de modelos de auto:
  modelOptions = [
    { value: 'Corvette', label: 'Corvette' },
    { value: 'Fiesta', label: 'Fiesta' },
    { value: 'GT-R', label: 'GT-R' },
    { value: 'MX-30', label: 'MX-30' },
    { value: 'Rifter', label: 'Rifter' },
  ];

  // Fabricantes de auto (para sugerencia):
  makers = [
    'Chevrolet',
    'Ford',
    'Mazda',
    'Nissan',
    'Peugeot',
  ];

  // Modelos de auto (para sugerencia):
  models = [
    'Corvette',
    'Fiesta',
    'GT-R',
    'MX-30',
    'Rifter'
  ];

  // Opciones de horario de las sedes de Donut-Motors:
  timeOptions = [
      { value: '8:00', label: '8:00' },
      { value: '8:30', label: '8:30' },
      { value: '9:00', label: '9:00' },
      { value: '9:30', label: '9:30' },
      { value: '10:00', label: '10:00' },
      { value: '10:30', label: '10:30' },
      { value: '11:00', label: '11:00' },
      { value: '11:30', label: '11:30' },
      { value: '12:00', label: '12:00' },
      { value: '12:30', label: '12:30' },
      { value: '13:00', label: '13:00' },
      { value: '13:30', label: '13:30' },
      { value: '14:00', label: '14:00' },
      { value: '14:30', label: '14:30' },
      { value: '15:00', label: '15:00' },
      { value: '15:30', label: '15:30' },
      { value: '16:00', label: '16:00' },
      { value: '16:30', label: '16:30' },
      { value: '17:00', label: '17:00' },
    ];

  // Constructor de la clase:
  constructor(private http: HttpClient) {
    this.http = http;
  }

  /**
 * Método que establece el valor de la cadena de consulta.
 * @param {string} value - Valor de la cadena de consulta a establecer.
 * @returns {void}
 */
setQueryString(value: string): void {
  this.queryString = value;
}

/**
 * Método que obtiene el valor de la cadena de consulta.
 * @returns {string} - Valor actual de la cadena de consulta.
 */
getQueryString(): string {
  return this.queryString;
}

/**
 * Método de búsqueda para consumir el servicio utilizando Observables.
 * @param {Object} options - Opciones de búsqueda que incluyen limit, maker, model, y year.
 * @param {string} options.limit - Cantidad de objetos devueltos.
 * @param {string} options.maker - Fabricante para realizar la búsqueda.
 * @param {string} options.model - Modelo para realizar la búsqueda.
 * @param {string} options.year - Año para realizar la búsqueda.
 * @returns {Observable<CarsApi>} - Observable que devuelve un objeto CarsApi.
 */
  searchCarsApi = (options: { limit?: string, maker?: string, model?: string, year?: string }): Observable<CarsApi> => {
    const headerOptions = new HttpHeaders({
      'X-Api-Key': 'nK7yBNLBYaa4Pdxn+SBxyw==o0jbL22gh3mNk5z6',
    });

    let params = new HttpParams();

    if (options.limit) {
      params = params.set('limit', options.limit) // Parámetro que indica la cantidad de objetos devueltos.
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
