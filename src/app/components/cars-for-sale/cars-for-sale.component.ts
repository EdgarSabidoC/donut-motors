import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchService } from '@app/services/search.service';

@Component({
  selector: 'app-cars-for-sale',
  templateUrl: './cars-for-sale.component.html',
  styleUrls: ['./cars-for-sale.component.scss']
})

/**
 * Componente que representa la funcionalidad de filtrado y ordenamiento de autos.
 */
export class CarsForSaleComponent implements OnInit {
  // Atributos
  filter_form!: FormGroup; // Formulario de filtro
  sort: string = 'asc'; // Tipo de ordenamiento, por modelo ascendente predeterminado.
  cars!: any; // Lista de autos

  /**
   * Constructor del componente.
   *
   * @param fb                  Instancia del FormBuilder para la creación de formularios reactivos.
   * @param searchService       Servicio de búsqueda de autos.
   */
  constructor(private fb: FormBuilder, private searchService: SearchService) {}

  /**
   * Método que se ejecuta al inicializar el componente.
   * Se encarga de crear el formulario de filtro con sus respectivos controles y validaciones.
   */
  ngOnInit(): void {
    this.filter_form = this.fb.group({
      maker: this.fb.control(null), // Control de fabricante
      model: this.fb.control(null), // Control de modelo
      minYear: this.fb.control(null, [Validators.pattern(/^\d{4}$/), Validators.min(1900)]), // Control de año mínimo con validaciones de patrón y mínimo valor
      maxYear: this.fb.control(null), // Control de año máximo
      priceRange: this.fb.control(null), // Control de rango de precio
      minPrice: this.fb.control({value: null, disabled: true}), // Control de precio mínimo
      maxPrice: this.fb.control({value: null, disabled: true}), // Control de precio máximo
      condition: this.fb.control(null), // Control de condición del auto
      transmission: this.fb.control(null), // Control de transmisión del auto
      dealership: this.fb.control(null), // Control de concesionaria
      category: this.fb.control(null), // Control de categoría del auto
    });
  }

  /**
  * Método que se ejecuta cuando se cambia algún filtro en la interfaz.
  *
  * @param event     Evento que desencadena el cambio del filtro.
  * @param filters   Objeto que contiene los booleanos indicando qué filtros se aplicarán.
  */
  onFilterChange(event: any, filters: { maker?: boolean, model?: boolean,
    minYear?: boolean, maxYear?: boolean, priceRange?: boolean, minPrice?: boolean,
    maxPrice?: boolean, condition?: boolean, transmission?: boolean, dealership?: boolean,
    category?: boolean }) {

    // Mapa que asocia los booleanos de los filtros con los nombres de los controles en el formulario:
    const filterControlMap = new Map([
      [filters.maker, 'maker'],
      [filters.model, 'model'],
      [filters.minYear, 'minYear'],
      [filters.maxYear, 'maxYear'],
      [filters.priceRange, 'priceRange'],
      [filters.minPrice, 'minPrice'],
      [filters.maxPrice, 'maxPrice'],
      [filters.condition, 'condition'],
      [filters.transmission, 'transmission'],
      [filters.dealership, 'dealership'],
      [filters.category, 'category']
    ]);

    // Itera sobre el mapa y asigna los valores de los filtros al formulario en base a los booleanos:
    let eventValue = event.target.value;
    for (const [filter, controlName] of filterControlMap) {
      if (filter) {
        // Verifica si el valor de minYear o maxYear está dentro del rango permitido:
        if ((controlName === 'minYear' || controlName === 'maxYear') && Number(eventValue) < 1900 || Number(eventValue) > 2099) {
          continue;
        }

        // Verifica si el valor de maxYear es menor que el de minYear:
        let minYearControl = this.filter_form.get('minYear');
        let maxYearControl = this.filter_form.get('maxYear');
        let minYearValue = Number(minYearControl?.value);
        let maxYearValue = Number(maxYearControl?.value);
        if (minYearValue !== null && controlName === 'maxYear' && Number(eventValue) < minYearValue) {
          let tmp = minYearValue;
          minYearControl?.setValue(Number(eventValue));
          maxYearControl?.setValue(tmp);
          console.log("minYearValue: ", minYearValue, "maxYearValue", maxYearValue);
          continue;
        } else if(maxYearValue !== null && controlName === 'minYear' && Number(eventValue) > maxYearValue) {
          // Verifica si el valor de minYear es mayor que el de maxYear:
          let tmp = Number(maxYearValue);
          maxYearControl?.setValue(Number(eventValue));
          minYearControl?.setValue(tmp);
          console.log("minYearValue: ", minYearValue, "maxYearValue", maxYearValue);
          continue;
        }

        // Verifica si el valor de minPrice o maxPrice está dentro del rango permitido:
        if ((controlName === 'minPrice' || controlName === 'maxPrice') && (eventValue === '' || Number(eventValue) <= 0)) {
          continue;
        }

        // Verifica si el valor de maxPrice es menor que el de minPrice:
        let minPriceControl = this.filter_form.get('minPrice');
        let maxPriceControl = this.filter_form.get('maxPrice');
        let minPriceValue = Number(minPriceControl?.value);
        let maxPriceValue = Number(maxPriceControl?.value);
        if (minPriceValue !== null && controlName === 'maxPrice' && Number(eventValue) < minPriceValue) {
          let tmp = minPriceValue;
          minPriceControl?.setValue(Number(eventValue));
          maxPriceControl?.setValue(tmp);
          console.log("minPriceValue: ", minPriceValue, "maxPriceValue", maxPriceValue);
          continue;
        } else if(maxPriceValue !== null && controlName === 'minPrice' && Number(eventValue) > maxPriceValue) {
          // Verifica si el valor de minPrice es mayor que el de maxPrice:
          let tmp = maxPriceValue;
          maxPriceControl?.setValue(Number(eventValue));
          minPriceControl?.setValue(tmp);
          console.log("minPriceValue: ", minPriceValue, "maxPriceValue", maxPriceValue);
          continue;
        }

        // Verifica si están activados o desactivados los precios personalizados:
        this.enableCustomPrices(controlName, eventValue);

        // Establece el valor del filtro correspondiente:
        this.filter_form.get(controlName)?.setValue(eventValue);
        console.log(this.filter_form.get(controlName)?.value); // Se imprime el valor del filtro en la consola.
      }
    }
  }

  /**
  * Método que se ejecuta cuando se cambia el tipo de ordenamiento en la interfaz.
  *
  * @param event     Evento que desencadena el cambio del tipo de ordenamiento.
  */
  onSortChange(event: any) {
    // Asigna el nuevo valor de ordenamiento al atributo 'sort':
    this.sort = event.target.value;
    // Aplica el nuevo tipo de ordenamiento a la lista de autos utilizando el método 'sortCars':
    this.cars = this.sortCars(this.sort);
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
    const cars = this.searchService.cars;

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

  /**
  * Habilita o deshabilita los controles de precio personalizado en el formulario de filtro
  * en base al nombre del control y al valor seleccionado.
  *
  * @param {string} controlName - El nombre del control en el formulario.
  * @param {string} value - El valor seleccionado en el control.
  * @returns {void}
  */
  enableCustomPrices(controlName: string, value: string): void {
    // Si el nombre del control es 'priceRange' y el valor es 'customRange',
    // entonces habilitar los controles de precio personalizado (minPrice y maxPrice):
    if (controlName === 'priceRange' && value === 'customRange') {
      this.filter_form.get('minPrice')?.enable();
      this.filter_form.get('maxPrice')?.enable();
    }
    // Si el nombre del control no es 'minPrice' ni 'maxPrice',
    // entonces deshabilitar los controles de precio personalizado
    // (minPrice y maxPrice) y establecer sus valores en null:
    else if (controlName !== 'minPrice' && controlName !== 'maxPrice') {
      this.filter_form.get('minPrice')?.disable();
      this.filter_form.get('maxPrice')?.disable();
      this.filter_form.get('minPrice')?.setValue(null);
      this.filter_form.get('maxPrice')?.setValue(null);
    }
  }

  /**
  * Función para desmarcar los elementos de radio del formulario.
  *
  * @param filters Objeto que contiene las opciones de filtrado para desmarcar.
  *        - priceRange: booleano que indica si se debe desmarcar la opción de rango de precio.
  *        - condition: booleano que indica si se debe desmarcar la opción de condición.
  *        - transmission: booleano que indica si se debe desmarcar la opción de transmisión.
  */
  uncheckRadio(filters: { priceRange?: boolean, condition?: boolean, transmission?: boolean}) {
    if (filters.priceRange) {
      this.filter_form.get('priceRange')?.setValue(null); // Establece el valor del elemento de radio de rango de precio a null para desmarcarlo.
    }

    if (filters.condition) {
      this.filter_form.get('condition')?.setValue(null); // Establece el valor del elemento de radio de condición a null para desmarcarlo.
    }

    if (filters.transmission) {
      this.filter_form.get('transmission')?.setValue(null); // Establece el valor del elemento de radio de transmisión a null para desmarcarlo.
    }
  }

}
