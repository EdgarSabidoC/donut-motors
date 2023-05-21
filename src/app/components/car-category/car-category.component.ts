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
  
  categorypOptions: { value: string, label: string }[] = [];

  ngOnInit(): void {
    this.searchService.getDataOptionList("http://localhost:3001/api/car_category").subscribe(
      categorypOptions => {
        this.categorypOptions = categorypOptions;
      },
      error => {
        console.error('Error:', error);
      }
    );
  }
}
