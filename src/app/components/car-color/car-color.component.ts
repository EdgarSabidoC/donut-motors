import { Component } from '@angular/core';
import { SearchService } from '@app/services/search.service';
@Component({
  selector: 'app-car-color',
  templateUrl: './car-color.component.html',
  styleUrls: ['./car-color.component.scss']
})
export class CarColorComponent {

  constructor(private searchService: SearchService){}

  colorOptions = this.searchService.colorOptions;
}
