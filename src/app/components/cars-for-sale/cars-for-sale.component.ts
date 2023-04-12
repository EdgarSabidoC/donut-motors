import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchService } from '@app/services/search.service';

@Component({
  selector: 'app-cars-for-sale',
  templateUrl: './cars-for-sale.component.html',
  styleUrls: ['./cars-for-sale.component.scss']
})
export class CarsForSaleComponent implements OnInit {
  filter_form!: FormGroup;
  sort_form!: FormGroup;
  cars!: any;

  constructor(private fb: FormBuilder, private SearchService: SearchService) {}

  ngOnInit(): void {
    this.sort_form = this.fb.group({
      sort: this.fb.control('asc'),
    });
    this.filter_form = this.fb.group({
      maker: this.fb.control(null),
      model: this.fb.control(null),
      minYear: this.fb.control(null,[Validators.pattern(/^\d{4}$/), Validators.min(1900)]),
      maxYear: this.fb.control(null),
      priceRange: this.fb.control(null),
      minPrice: this.fb.control(null),
      maxPrice: this.fb.control(null),
      condition: this.fb.control(null),
      transmision: this.fb.control(null),
      dealership: this.fb.control(null),
      category: this.fb.control(null),
    });
    console.log(this.sortCars(this.sort_form.get('sort')?.value));
  }

  onFilterChange(event: any, filters: {maker?: boolean, model?: boolean,
    minYear?: boolean, maxYear?: boolean, priceRange?: boolean, minPrice?: boolean,
    maxPrice?: boolean, condition?: boolean, transmision?: boolean, dealership?: boolean,
    category?: boolean}) {
  const filterControlMap = new Map([
    [filters.maker, 'maker'],
    [filters.model, 'model'],
    [filters.minYear, 'minYear'],
    [filters.maxYear, 'maxYear'],
    [filters.priceRange, 'priceRange'],
    [filters.minPrice, 'minPrice'],
    [filters.maxPrice, 'maxPrice'],
    [filters.condition, 'condition'],
    [filters.transmision, 'transmision'],
    [filters.dealership, 'dealership'],
    [filters.category, 'category']
  ]);

  for (const [filter, controlName] of filterControlMap) {
    if (filter) {
      this.filter_form.get(controlName)?.setValue(event.target.value);
    }
  }

  if(this.filter_form.get('minYear')?.value >= 1900 && this.filter_form.get('minYear')?.value <= 2099)
    console.log(this.filter_form.get('minYear')?.value);
}

  onSortChange(event: any) {
    let sort = event.target.value;
    this.sort_form.get('sort')?.setValue(sort);
    this.cars = this.sortCars(sort);
    console.log(this.cars);
  }

  /**
 * Ordena la lista de autos en base al criterio de ordenamiento especificado.
 *
 * @param {string} sort - El criterio de ordenamiento. Puede ser uno de los siguientes valores:
 *   - 'asc': Orden ascendente por modelo (alfabéticamente en minúsculas).
 *   - 'desc': Orden descendente por modelo (alfabéticamente en minúsculas).
 *   - 'low': Orden ascendente por precio.
 *   - 'high': Orden descendente por precio.
 *   - 'old': Orden ascendente por año.
 *   - 'new': Orden descendente por año.
 *
 * @returns {Array} - La lista de autos ordenada de acuerdo al criterio especificado.
 */
  sortCars(sort: string) {
     // Obtener la lista de autos del servicio de búsqueda:
    const cars = this.SearchService.cars;

     // Definir los criterios de ordenamiento como funciones de comparación:
    const sortCriteria: Record<string, (a: any, b: any) => number> = {
      'asc': (a, b) => a.model.toLowerCase().localeCompare(b.model.toLowerCase()),
      'desc': (a, b) => b.model.toLowerCase().localeCompare(a.model.toLowerCase()),
      'low': (a, b) => a.price - b.price,
      'high': (a, b) => b.price - a.price,
      'old': (a, b) => a.year - b.year,
      'new': (a, b) => b.year - a.year
    };

     // Verificar si el criterio de ordenamiento especificado está en la lista de criterios válidos:
    if (sort in sortCriteria) {
      // Aplicar el criterio de ordenamiento y devolver la lista ordenada:
      return cars.sort(sortCriteria[sort]);
    }

    // Si el criterio de ordenamiento no es válido, devolver la lista original de autos:
    return cars;
  }

}
