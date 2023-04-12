import { Component } from '@angular/core';
import { SearchService } from '@app/services/search.service';
@Component({
  selector: 'app-car-maker',
  templateUrl: './car-maker.component.html',
  styleUrls: ['./car-maker.component.scss']
})
export class CarMakerComponent {

  constructor(private searchService: SearchService){}

  makerOptions = this.searchService.makerOptions;
}
