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
  makerOptions = this.searchService.makerOptions;
}

