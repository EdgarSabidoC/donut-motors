/**
 * Componente que representa un servicio de búsqueda de autos.
 * Este componente utiliza Observables para realizar la búsqueda y devuelve un objeto CarsApi.
 * Aún no está completo.
 */
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HTTPMethodsService } from '@app/services/httpmethods.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators'
declare var $: any;

interface tmpCarList {
  filter: {
    priceRange: string;
    model: string;
    minYear: string;
    maxYear: string;
    transmission: string;
    maker: string;
    category: string;
    condition: string;
    dealership: string;
  };
  queryString: string;
  tmpCars: {
    vin: string;
    mileage: number;
    description: string;
    price: number;
    model: string;
    year: number;
    transmission: string;
    maker: string;
    category: string;
    condition: string;
    interior_color: string;
    exterior_color: string;
    dealership: string;
    car_image: string;
  }[];
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  queryString: string = ''; // Consulta de búsqueda
  
  // Lista de autos disponibles
  cars: { vin: string, mileage: number, description: string, price: number, model: string, year: number, transmission: string, maker: string,
    category: string, condition: string, interior_color: string, exterior_color: string, dealership: string, car_image: string }[] = [];

  tmpCars: tmpCarList = {
    filter: {
      priceRange: "",
      model: "",
      minYear: "",
      maxYear: "",
      transmission: "",
      maker: "",
      category: "",
      condition: "",
      dealership: ""
    },
    queryString: '',
    tmpCars: []
  };

  // Opciones de categoría de auto
  categorypOptions: { value: string, label: string }[] = [];

  // Opciones de color de auto
  colorOptions: { value: string, label: string }[] = [];

  // Opciones de fabricantes de autos
  makerOptions: { value: string, label: string }[] = [];

  // Opciones de sedes de Donut-Motors:
  dealershipOptions: { value: string, label: string }[] = [];

  // Opciones de modelos de auto:
  modelOptions: { value: string, label: string }[] = [];

  // Fabricantes de auto (para sugerencia):
  makers: string[] = [];

  // Modelos de auto (para sugerencia):
  models: string[] = [];

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
  constructor(private http: HttpClient, private HTTPMethodsService: HTTPMethodsService) {
    this.http = http;
    this.getDataSuggestion("http://localhost:3001/api/car_maker").subscribe(
      makers => {
        this.makers = makers;
      },
      error => {
        console.error('Error:', error);
      }
    );
    this.getDataSuggestion("http://localhost:3001/api/car_model").subscribe(
      models => {
        this.models = models;
      },
      error => {
        console.error('Error:', error);
      }
    );
    this.getCarList().subscribe(
      cars => {
        this.cars = cars;
      },
      error => {
        console.error('Error:', error);
      }
    );
  }
  
  /**
  * Método que recupera la información de la base de datos para las sugerencia del servicio de busqueda.
  * @returns {Observable<string[]>} - Observable que devuelve una lista.
  */
  getDataSuggestion(url: string): Observable<string[]> {
    return this.HTTPMethodsService.getRequest(url).pipe(
      map((response: any) => {
        return response.data.map((item: any) => item.name);
      }),
      catchError((error: any) => {
        console.error('Error:', error);
        return of([]); // Devuelve un array vacío en caso de error
      })
    );
  }

  /**
  * Método que recupera la información de la base de datos para las listas de opciones del servicio de busqueda.
  * @returns {Observable<{ value: string, label: string }[]>} - Observable que devuelve una lista de valores.
  */
  getDataOptionList(url: string): Observable<{ value: string, label: string }[]> {
    return this.HTTPMethodsService.getRequest(url).pipe(
      map((response: any) => {
        return response.data.map((item: any) => {
          return { value: item.name, label: item.name };
        });
      }),
      catchError((error: any) => {
        console.error('Error:', error);
        return of([]); // Devuelve un array vacío en caso de error
      })
    );
  }

  /**
  * Método que recupera la información de la base de datos para las listas de opciones de los autos del servicio de busqueda.
  * @returns {Observable<{ vin: string, mileage: number, description: string, price: number, model: string, year: number, transmission: string, condition: string, interior_color: string, exterior_color: string, dealership: string, car_image: string }[]>} - Observable que devuelve una lista de valores.
  */
  getCarList(): Observable<{ vin: string, mileage: number, description: string, price: number, model: string, year: number, transmission: string, maker: string,
    category: string, condition: string, interior_color: string, exterior_color: string, dealership: string, car_image: string }[]> {
    return this.HTTPMethodsService.getRequest("http://localhost:3001/api/car").pipe(
      map((response: any) => {
        return response.data.map((item: any) => {
          return { vin: item.vin, mileage: item.mileage, description: item.description, price: item.sale_price, model: item.car_model.name, year: item.car_model.year,
            transmission: item.car_model.model_transmission.type, maker: item.car_model.model_maker.name, category: item.car_model.model_category.name, 
            condition: item.car_condition.type, interior_color: item.car_interior_color.name, exterior_color: item.car_exterior_color.name,
            dealership: item.car_dealership.name, car_image: item.car_image };
        });
      }),
      catchError((error: any) => {
        console.error('Error:', error);
        return of([]); // Devuelve un array vacío en caso de error
      })
    );
  }
  
  setCarListSort(carSort: { vin: string, mileage: number, description: string, price: number, model: string, year: number, transmission: string, maker: string,
    category: string, condition: string, interior_color: string, exterior_color: string, dealership: string, car_image: string }[]){
      if (!(this.tmpCars.tmpCars && this.tmpCars.tmpCars.length > 0)){
        this.cars = carSort;
      }
      else {
        this.tmpCars.tmpCars = carSort;
      }
      this.feedPagination();
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
  /*searchCarsApi = (query: string): Observable<CarsApi> => {
    /*const headerOptions = new HttpHeaders({
      'X-Api-Key': 'nK7yBNLBYaa4Pdxn+SBxyw==o0jbL22gh3mNk5z6',
    });

    let params = new HttpParams();

    if (options.limit) {
      params = params.set('limit', options.limit) // Parámetro que indica la cantidad de objetos devueltos.
    }
    if (options.maker) {
      params = params.set('make', options.maker.toLowerCase()); // Parámetro que realiza la búsqueda por fabricante.
    }

    if (options.model) {
      params = params.set('model', options.model.toLowerCase()); // Parámetro que realiza la búsqueda por modelo.
    }

    if (options.year) {
      params = params.set('year', options.year); // Parámetro que realiza la búsqueda por año.
    }

    const apiUrl: string = 'https://api.api-ninjas.com/v1/cars';
    return this.http.get<CarsApi>(apiUrl, { headers: headerOptions, params });
    try {
      this.queryString = this.getQueryString();
      //category = "";
      //tmpRssList.category = category;
      
      let tmp: { vin: string; mileage: number; description: string; price: number; model: string; year: number; transmission: string; maker: string; category: string; condition: string; interior_color: string; exterior_color: string; dealership: string; car_image: string; }[] = [];
      this.tmpCars.queryString = this.queryString;
  
      const queryWords = this.queryString.split(" "); // separar la cadena de consulta en palabras
  
      // Se busca dentro de la lista de rss en caché:
      this.cars.forEach((item) => {
        //let categories = rss.categories.toLowerCase();
        let description = item.description.toLowerCase();
        let model = item.model.toLowerCase();
  
        // comprobar si alguna de las palabras de la consulta aparece en el título 0 descripción
        const matchesQuery = queryWords.some((word) => {
          return (
            //categories.includes(word) ||
            description.includes(word) ||
            model.includes(word)
          );
        });
  
        if (matchesQuery) {
          tmp.push(item);
        }
      });
  
      if (tmp.length > 0) {
        this.tmpCars.tmpCars = tmp;
      }
    } catch (error) {
      console.error(error);
    }
  }*/
  resetTmpCarList = () => {
    this.tmpCars.tmpCars = [];
    this.tmpCars.queryString = "";
    this.tmpCars.filter = {
      priceRange: "",
      model: "",
      minYear: "",
      maxYear: "",
      transmission: "",
      maker: "",
      category: "",
      condition: "",
      dealership: ""
    };;
  };

  searchCarsApi(query: string): Observable<{ vin: string; mileage: number; description: string; price: number; model: string; year: number; transmission: string; maker: string; category: string; condition: string; interior_color: string; exterior_color: string; dealership: string; car_image: string; }[]> {
    return new Observable<{ vin: string; mileage: number; description: string; price: number; model: string; year: number; transmission: string; maker: string; category: string; condition: string; interior_color: string; exterior_color: string; dealership: string; car_image: string; }[]>((observer) => {
      try {
        this.queryString =query.toLowerCase();
        let filter = {
          priceRange: "",
          model: "",
          minYear: "",
          maxYear: "",
          transmission: "",
          maker: "",
          category: "",
          condition: "",
          dealership: ""
        };
        this.tmpCars.filter = filter;
        if (this.queryString !== "" && this.queryString === this.tmpCars.queryString) {
          observer.next(this.tmpCars.tmpCars);
          observer.complete();
          return;
        }
        let tmp: { vin: string; mileage: number; description: string; price: number; model: string; year: number; transmission: string; maker: string; category: string; condition: string; interior_color: string; exterior_color: string; dealership: string; car_image: string; }[] = [];
        this.tmpCars.queryString = this.queryString;
  
        const queryWords = this.queryString.split(" "); // separar la cadena de consulta en palabras
  
        // Se busca dentro de la lista de rss en caché:
        this.cars.forEach((item) => {
          let description = item.description.toLowerCase();
          let model = item.model.toLowerCase();
  
          // comprobar si alguna de las palabras de la consulta aparece en el título o descripción
          const matchesQuery = queryWords.some((word) => {
            return description.includes(word) || model.includes(word);
          });
  
          if (matchesQuery) {
            tmp.push(item);
          }
        });
  
        if (tmp.length > 0) {
          this.tmpCars.tmpCars = tmp;
          this.setResults(tmp.length);
          this.feedPagination();
          observer.next(this.tmpCars.tmpCars);
        } else {
          this.tmpCars.tmpCars = [];
          this.setResults(tmp.length);
          this.feedPagination();
          observer.next([]);
        }
  
        observer.complete();
      } catch (error) {
        console.error(error);
        observer.error(error);
      }
    });
  }

  searchFilter(query: tmpCarList["filter"]): Observable<{ vin: string; mileage: number; description: string; price: number; model: string; year: number; transmission: string; maker: string; category: string; condition: string; interior_color: string; exterior_color: string; dealership: string; car_image: string; }[]> {
    return new Observable<{ vin: string; mileage: number; description: string; price: number; model: string; year: number; transmission: string; maker: string; category: string; condition: string; interior_color: string; exterior_color: string; dealership: string; car_image: string; }[]>((observer) => {
      try {
        this.queryString = "";
        this.tmpCars.queryString = this.queryString;
        let filter = query;
        if (filter !== null && filter === this.tmpCars.filter) {
          observer.next(this.tmpCars.tmpCars);
          observer.complete();
          return;
        }
        let tmp: { vin: string; mileage: number; description: string; price: number; model: string; year: number; transmission: string; maker: string; category: string; condition: string; interior_color: string; exterior_color: string; dealership: string; car_image: string; }[] = [];
        this.tmpCars.filter = filter;

        this.cars.forEach((item) => {
          let conditionFilter: boolean = true;
          let model = item.model.toLowerCase();
          let maker = item.maker.toLocaleLowerCase();
          let condition = item.condition.toLocaleLowerCase();
          let transmission = item.transmission.toLocaleLowerCase();
          let dealership = item.dealership.toLocaleLowerCase();
          let categories = item.category.toLocaleLowerCase();
          if(this.tmpCars.filter.category){
            if(!(this.tmpCars.filter.category.toLocaleLowerCase() === categories)){
              conditionFilter = false;
            }
          }
          if(this.tmpCars.filter.condition){
            if(!(this.tmpCars.filter.condition.toLocaleLowerCase() === condition)){
              conditionFilter = false;
            }
          }
          if(this.tmpCars.filter.dealership){
            if(!(this.tmpCars.filter.dealership.toLocaleLowerCase() === dealership)){
              conditionFilter = false;
            }
          }
          if(this.tmpCars.filter.maker){
            if(!(this.tmpCars.filter.maker.toLocaleLowerCase() === maker)){
              conditionFilter = false;
            }
          }
          if(this.tmpCars.filter.model){
            if(!(this.tmpCars.filter.model.toLocaleLowerCase() === model)){
              conditionFilter = false;
            }
          }
          if(this.tmpCars.filter.transmission){
            if(!(this.tmpCars.filter.transmission.toLocaleLowerCase() === transmission)){
              conditionFilter = false;
            }
          }
          if (conditionFilter) {
            tmp.push(item);
          }
        });
  
        if (tmp.length > 0) {
          this.tmpCars.tmpCars = tmp;
          this.setResults(tmp.length);
          console.log(tmp.length);
          this.feedPagination();
          observer.next(this.tmpCars.tmpCars);
        } else {
          this.tmpCars.tmpCars = [];
          this.setResults(tmp.length);
          this.feedPagination();
          observer.next([]);
        }
  
        observer.complete();
      } catch (error) {
        console.error(error);
        observer.error(error);
      }
    });
  }

  feedPagination(): void {
    try {
      const container = $('#pagination-list');
  
      if (!container.length) return;
  
      const sources = (() => {
        let list = this.tmpCars.tmpCars;
        if (!(list && list.length > 0)) list = this.cars;
        return list;
      })();
  
      const options = {
        dataSource: sources,
        pageSize: 9,
        callback: (response:{ vin: string; mileage: number; description: string; price: number; model: string; year: number; transmission: string; maker: string; category: string; condition: string; interior_color: string; exterior_color: string; dealership: string; car_image: string; }[], pagination:any) => {
          window.console && console.log(response, pagination);
          const dataHtml = response.reduce((accumulator, item, index) => {
            if (index % 3 === 0) {
              accumulator += `<div class="row">`;
            }
          
            accumulator += `
              <div class="col-lg-4 mb-3">
                <div class="card h-100 bg-warning shadow border-0">
                
                  <a href="/buy-a-car?query=${item.vin}" class="stretched-link text-decoration-none">
                    <img class="card-img-top" alt="${item.model}" src="http://localhost:3001/car_photos/${item.car_image}" />
                  </a>
                  <div class="card-body">
                    <div class="small text-muted">${item.year}</div>
                    <h5 class="card-title mb-0 text-black">${item.model}</h5>
                    <p class="card-text mb-0 text-black">Dealership: ${item.dealership}</p>
                    <p class="card-text mb-0 text-black">Mileage: ${item.mileage}</p>
                    <p class="card-text mb-0 text-black">Price: ${item.price}</p>
                  </div>
                </div>
              </div>`;
          
            if (index % 3 === 2) {
              accumulator += `</div>`;
            }
          
            return accumulator;
          }, '');
          container.prev().html(dataHtml);
        }
      };
  
      container.addHook('beforeInit', () => {
        window.console && console.log('beforeInit...');
      });
  
      container.pagination(options);
  
      container.addHook('beforePageOnClick', () => {
        window.console && console.log('beforePageOnClick...');
        // return false;
      });
    } catch (error) {
      console.error(error);
    }
  }

  getDataList = (): Observable<any> => {
    return new Observable((observer) => {
      try {
        this.resetTmpCarList();
        if (Array.isArray(this.cars) && this.cars.length > 0) {
          // Se muestra la lista de rss.
          this.restartResults();
          this.feedPagination();
          observer.next(this.cars);
          observer.complete();
        }
        
        const subscription = this.getCarList().subscribe(
          cars => {
            this.cars = cars;
            this.restartResults();
            this.feedPagination();
            observer.next(this.cars);
            observer.complete();
          },
          error => {
            console.error('Error:', error);
            observer.error(error);
          }
        );
      } catch (error) {
        console.error(error);
        observer.error(error);
      }
    });
  };
  setResults(results: number): void {
    const element = document.getElementById("resultsCount");
    if (element) {
      if(results === 0){
        element.innerHTML = results + " results found - Showing all results";
      }
      else{
        element.innerHTML = results + " results";
      }
    }
  }
  
  restartResults(): void {
    const element = document.getElementById("resultsCount");
    if (element) {
      element.innerHTML = "All results";
    }
  }
}
