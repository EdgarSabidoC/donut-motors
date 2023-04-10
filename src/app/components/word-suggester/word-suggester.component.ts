import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subject, merge, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SearchService } from '@app/services/search.service';

@Component({
  selector: 'app-word-suggester',
  templateUrl: './word-suggester.component.html',
  styleUrls: ['./word-suggester.component.scss'],
})
export class WordSuggesterComponent {
  makers = [
  'mercedes-benz',
  'ford',
  'audi',
  'chevrolet',
  ];
  suggester_form !: FormGroup;
  model!: any;

  constructor(private SearchService: SearchService) {}

	@ViewChild('instance', { static: true })
  instance!: NgbTypeahead;
	focus$ = new Subject<string>();
	click$ = new Subject<string>();

	search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) => {
		const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
		const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
		const inputFocus$ = this.focus$;

		return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
        map((term) => {
            // Realiza las operaciones necesarias con el término y devuelve el resultado
            return (term === '' ? this.makers : this.makers.filter((v) => v?.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10);
        }),
    );
	};

  onSuggestionSelected(suggestion: string): void {
    // Llamar al servicio para almacenar la cadena obtenida
    this.SearchService.setSelectedString(suggestion);
  }
}