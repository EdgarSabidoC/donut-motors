import { Component } from '@angular/core';
import { SearchService } from '@app/services/search.service';
@Component({
  selector: 'app-car-model',
  templateUrl: './car-model.component.html',
  styleUrls: ['./car-model.component.scss']
})
export class CarModelComponent {

  constructor(private searchService: SearchService){}

  modelOptions = this.searchService.modelOptions;
}
