/**
 * Componente de la barra de búsqueda.
 * Permite ingresar un término de búsqueda y utilizar un componente de sugerencias de palabras.
 */
import { Component, ViewChild } from '@angular/core';
import { SearchService } from '@app/services/search.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { WordSuggesterComponent } from '../word-suggester/word-suggester.component';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  search_form!: FormGroup;
  @ViewChild(WordSuggesterComponent, { static: true })
  wordSuggester!: WordSuggesterComponent;

  constructor(private fb: FormBuilder, private searchService: SearchService) {}

  /**
   * Inicializa el componente y crea el formulario de la barra de búsqueda.
   */
  ngOnInit(): void {
    // Formulario de la barra de búsqueda:
    this.search_form = this.fb.group({
      search_query: this.fb.control(null),
    });
  }

  /**
   * Realiza una búsqueda utilizando el servicio de búsqueda.
   * Obtiene la consulta de búsqueda desde el servicio y la establece en el formulario.
   */
  searchQuery(){
    const service = this.searchService;
    let query: string = this.searchService.getQueryString();
    type Filters = { limit?: number; maker?: string; model?: string; };
    const options: Filters = {limit: 10 };
    if(query && query !== '') {
      if(service.models.includes(query)) {
        options.model = query;
      } else if(service.makers.includes(query)) {
        options.maker = query;
      }
      // Muestra el resultado de la búsqueda en la consola:
      this.searchService.searchCarsApi(options).subscribe({
        next: value => console.log("The results are: ",value),
        error: error => console.error("Error: " + error.statusText)
      });
      // Establece la consulta de búsqueda en el formulario:
      this.search_form.get('search_query')?.setValue(query);
    }
  }
}
