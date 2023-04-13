/**
 * Clase que representa el componente de categoría de automóviles.
 */
import { Component } from '@angular/core';
import { SearchService } from '@app/services/search.service';

@Component({
  selector: 'app-car-category',
  templateUrl: './car-category.component.html',
  styleUrls: ['./car-category.component.scss']
})
export class CarCategoryComponent {

  /**
   * Constructor de la clase CarCategoryComponent.
   * @param searchService Servicio de búsqueda utilizado para obtener las opciones de categoría.
   */
  constructor(private searchService: SearchService){}

  /**
   * Opciones de categoría obtenidas del servicio de búsqueda.
   */
  categorypOptions = this.searchService.categorypOptions;
}
