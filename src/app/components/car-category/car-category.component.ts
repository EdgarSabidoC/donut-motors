import { Component } from '@angular/core';
import { SearchService } from '@app/services/search.service';

@Component({
  selector: 'app-car-category',
  templateUrl: './car-category.component.html',
  styleUrls: ['./car-category.component.scss']
})
export class CarCategoryComponent {

  constructor(private searchService: SearchService){}

  categorypOptions = this.searchService.categorypOptions;
}
