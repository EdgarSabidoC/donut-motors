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
    let query: string = this.searchService.getQueryString();
    if(query && query !== '') {
      // Muestra la consulta de búsqueda en la consola:
      console.log("Query string en search-bar: ", query);
      // Establece la consulta de búsqueda en el formulario:
      this.search_form.get('search_query')?.setValue(query);
    }
  }
}
