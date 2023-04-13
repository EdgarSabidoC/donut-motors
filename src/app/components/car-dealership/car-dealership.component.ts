/**
 * Clase que representa el componente de concesionario de automóviles.
 */
import { Component } from '@angular/core';
import { SearchService } from '@app/services/search.service';

@Component({
  selector: 'app-car-dealership',
  templateUrl: './car-dealership.component.html',
  styleUrls: ['./car-dealership.component.scss']
})
export class CarDealershipComponent {

  /**
   * Constructor de la clase CarDealershipComponent.
   * @param searchService Servicio de búsqueda utilizado para obtener las opciones de concesionario.
   */
  constructor(private searchService: SearchService){}

  /**
   * Opciones de concesionario obtenidas del servicio de búsqueda.
   */
  dealershipOptions = this.searchService.dealershipOptions;
}
