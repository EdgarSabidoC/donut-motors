/**
 * Clase que representa el componente de fabricante de automóviles.
 */
import { Component } from '@angular/core';
import { SearchService } from '@app/services/search.service';

@Component({
  selector: 'app-car-maker',
  templateUrl: './car-maker.component.html',
  styleUrls: ['./car-maker.component.scss']
})
export class CarMakerComponent {

  /**
   * Constructor de la clase CarMakerComponent.
   * @param searchService Servicio de búsqueda utilizado para obtener las opciones de fabricante.
   */
  constructor(private searchService: SearchService){}

  /**
   * Opciones de fabricante obtenidas del servicio de búsqueda.
   */

  makerOptions: { value: string, label: string }[] = [];

  ngOnInit(): void {
    this.searchService.getDataOptionList("http://localhost:3001/api/car_maker").subscribe(
      makerOptions => {
        this.makerOptions = makerOptions;
      },
      error => {
        console.error('Error:', error);
      }
    );
  }
}

