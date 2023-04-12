import { Component } from '@angular/core';
import { SearchService } from '@app/services/search.service';
@Component({
  selector: 'app-car-dealership',
  templateUrl: './car-dealership.component.html',
  styleUrls: ['./car-dealership.component.scss']
})
export class CarDealershipComponent {

  constructor(private searchService: SearchService){}

  dealershipOptions = this.searchService.dealershipOptions;
}
