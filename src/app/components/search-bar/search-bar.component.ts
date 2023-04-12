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

  ngOnInit(): void {
    // Formulario de la barra de búsqueda:
    this.search_form = this.fb.group({
      search_query: this.fb.control(null),
    });
  }

  searchQuery(){
    let query: string = this.searchService.getQueryString();
    if(query && query !== '') {
      console.log("Query string en search-bar: ", query);
      this.search_form.get('search_query')?.setValue(query);
    }
  }
}
