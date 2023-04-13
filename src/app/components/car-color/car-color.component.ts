/**
 * Clase que representa el componente de color de automóviles.
 */
import { Component } from '@angular/core';
import { SearchService } from '@app/services/search.service';

@Component({
  selector: 'app-car-color',
  templateUrl: './car-color.component.html',
  styleUrls: ['./car-color.component.scss']
})
export class CarColorComponent {

  /**
   * Constructor de la clase CarColorComponent.
   * @param searchService Servicio de búsqueda utilizado para obtener las opciones de color.
   */
  constructor(private searchService: SearchService){}

  /**
   * Opciones de color obtenidas del servicio de búsqueda.
   */
  colorOptions = this.searchService.colorOptions;
}

