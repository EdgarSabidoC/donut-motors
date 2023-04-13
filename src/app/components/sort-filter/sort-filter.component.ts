/**
 * Clase del componente SortFilterComponent.
 * Este componente representa una lista de opciones de clasificación y filtrado.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-sort-filter',
  templateUrl: './sort-filter.component.html',
  styleUrls: ['./sort-filter.component.scss']
})
export class SortFilterComponent {
  sortOptions = [
    { value: 'asc', label: ' Name: Alphabetical Order (A-Z)' },
    { value: 'desc', label: 'Name: Alphabetical Order (Z-A)' },
    { value: 'low', label: 'Price: Low to High' },
    { value: 'high', label: 'Price: High to Low' },
    { value: 'old', label: 'Year: Oldest to Newest' },
    { value: 'new', label: 'Year: Newest to Oldest' },
  ];
}
