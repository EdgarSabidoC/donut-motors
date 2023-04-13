/**
 * Clase del componente TimeComponent.
 * Este componente representa una selección de opciones de tiempo.
 */
import { Component } from '@angular/core';
import { SearchService } from '@app/services/search.service';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent {

  constructor(private searchService: SearchService){}

  timeOptions = this.searchService.timeOptions; // Opciones de tiempo obtenidas del servicio SearchService
}

