import { Component, ViewChild } from '@angular/core';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subject, merge, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { SearchService } from '@app/services/search.service';

@Component({
  selector: 'app-word-suggester',
  templateUrl: './word-suggester.component.html',
  styleUrls: ['./word-suggester.component.scss'],
})
export class WordSuggesterComponent {
  makers = [
  'Acura',
  'Alfa-Romeo',
  'Aston Martin',
  'Audi',
  'BMW',
  'Bentley',
  'Buick',
  'Cadilac',
  'Chevrolet',
  'Chrysler',
  'Daewoo',
  'Daihatsu',
  'Dodge',
  'Eagle',
  'Ferrari',
  'Fiat',
  'Fisker',
  'Ford',
  'Freighliner',
  'GMC',
  'GMC - General Motors Company',
  'Genesis',
  'Geo',
  'Honda',
  'Hummer',
  'Hyundai',
  'Infinity',
  'Isuzu',
  'Jaguar',
  'Jeep',
  'Kla',
  'Lamborghini',
  'Land Rover',
  'Lexus',
  'Lincoln',
  'Lotus',
  'Mazda',
  'Maserati',
  'Maybach',
  'McLaren',
  'Mercedez-Benz',
  'Mercury',
  'Mini',
  'Mitsubishi',
  'Nissan',
  'Oldsmobile',
  'Panoz',
  'Plymouth',
  'Polestar',
  'Pontiac',
  'Porsche',
  'Ram',
  'Rivian',
  'Rolls_Royce',
  'Saab',
  'Saturn',
  'Smart',
  'Subaru',
  'Susuki',
  'Tesla',
  'Toyota',
  'Volkswagen',
  'Volvo',
  ].sort();
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
