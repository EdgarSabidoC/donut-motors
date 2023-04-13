/**
 * Clase que representa el componente de modelo de automóvil.
 */
import { Component } from '@angular/core';
import { SearchService } from '@app/services/search.service';

@Component({
  selector: 'app-car-model',
  templateUrl: './car-model.component.html',
  styleUrls: ['./car-model.component.scss']
})
export class CarModelComponent {

  /**
   * Constructor de la clase CarModelComponent.
   * @param searchService Servicio de búsqueda utilizado para obtener las opciones de modelo.
   */
  constructor(private searchService: SearchService){}

  /**
   * Opciones de modelo obtenidas del servicio de búsqueda.
   */
  modelOptions = this.searchService.modelOptions;
}

