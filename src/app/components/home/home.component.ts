import { Component, OnInit, ViewChild  } from '@angular/core';
import { SearchService } from '@app/services/search.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WordSuggesterComponent } from '../word-suggester/word-suggester.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  search_form!: FormGroup;
  @ViewChild(WordSuggesterComponent, { static: true })
  wordSuggester!: WordSuggesterComponent;

  constructor(private fb: FormBuilder, private SearchService: SearchService) {}

  ngOnInit(): void {
    // Formulario de la barra de búsqueda:
    this.search_form = this.fb.group({
      search_query: this.fb.control(null, [Validators.required]),
    });
  }

  searchCar(): void {
    this.SearchService.search({limit: "10", maker: this.search_form.get('search_query')?.value}).subscribe({
      next: value=> console.log('Next: ', value),
      error: error => console.log('Error: ', error)
    });
  }

  onSaveForm() {
    this.search_form.get('search_query')?.setValue(this.SearchService.selectedString);
    if (this.search_form.valid) {
      this.searchCar();
    }
  }
}
