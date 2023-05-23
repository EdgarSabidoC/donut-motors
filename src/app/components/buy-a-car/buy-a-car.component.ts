/**
 * Clase que representa el componente de compra de automóviles.
 */
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '@app/services/search.service';

@Component({
  selector: 'app-buy-a-car',
  templateUrl: './buy-a-car.component.html',
  styleUrls: ['./buy-a-car.component.scss']
})
export class BuyACarComponent {
  car!: any; // Lista de autos
  cars: { vin: string, mileage: number, description: string, price: number, model: string, year: number, transmission: string, maker: string, category: string, condition: string, interior_color: string, exterior_color: string, dealership: string, car_image: string }[] = [];

  constructor(private route: ActivatedRoute, private SearchService: SearchService) {
    this.SearchService.getCarList().subscribe(
      cars => {
        this.cars = cars;
      },
      error => {
        // Aquí manejas el error en caso de que ocurra
        console.error('Error:', error);
      },
      () => {
        // Aquí manejas la lógica cuando la suscripción se completa
        console.log('Suscripción completada');
      }
    );
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const id = params['query']; // Obtén el valor del query 'id'
      this.getCarItem(id);
    });
  }
  
  getCarItem(id: string) {
    this.SearchService.getCarItem(id).subscribe(carItem => {
      // Llena los datos del carItem en las variables del componente
      this.car = carItem;
      console.log(carItem);
    });
  }

}

