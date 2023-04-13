/**
 * Clase del componente WordSuggesterComponent.
 * Este componente proporciona sugerencias de palabras en función de las opciones disponibles.
 */
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subject, merge, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { SearchService } from '@app/services/search.service';

@Component({
  selector: 'app-word-suggester',
  templateUrl: './word-suggester.component.html',
  styleUrls: ['./word-suggester.component.scss'],
  encapsulation: ViewEncapsulation.Emulated // Encapsulación de estilos
})
export class WordSuggesterComponent {

  suggester_form !: FormGroup; // Formulario del componente
  model!: string; // Modelo de datos

  constructor(private searchService: SearchService) {}

  options = [...this.searchService.models, ...this.searchService.makers].sort(); // Opciones de sugerencias obtenidas del servicio SearchService

  @ViewChild('instance', { static: true })
  instance!: NgbTypeahead; // Referencia al componente NgbTypeahead

  focus$ = new Subject<string>(); // Subject para eventos de enfoque en el input
  click$ = new Subject<string>(); // Subject para eventos de clic en el input

  /**
   * Función de búsqueda de sugerencias.
   * Realiza la búsqueda en función del término ingresado en el input.
   * @param text$ - Observable del texto ingresado en el input
   * @returns Observable con el resultado de las sugerencias
   */
  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
        map((term) => {
            // Realiza las operaciones necesarias con el término y devuelve el resultado
            return (term === '' ? this.options : this.options.filter((v) => v?.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10);
        }),
    );
  };

  /**
   * Maneja el evento de selección de una sugerencia.
   * Actualiza el modelo de datos y realiza una búsqueda con el término seleccionado.
   * @param suggestion - Sugerencia seleccionada
   */
  onSuggestionSelected(suggestion: string): void {
    this.model = suggestion;
    this.searchQueryInput();
  }

  /**
   * Realiza la búsqueda con el término ingresado en el input.
   * Actualiza el servicio SearchService con el término de búsqueda.
   */
  searchQueryInput(){
    this.searchService.setQueryString(this.model);
  }

}
