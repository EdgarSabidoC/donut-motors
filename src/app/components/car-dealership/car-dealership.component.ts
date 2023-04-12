import { Component } from '@angular/core';

@Component({
  selector: 'app-car-dealership',
  templateUrl: './car-dealership.component.html',
  styleUrls: ['./car-dealership.component.scss']
})
export class CarDealershipComponent {
  dealershipOptions = [
    { value: 'Donut-Motors Cars Emporium', label: 'Donut-Motors Cars Emporium' },
    { value: 'Donut-Motors Vintage Auto Gallery', label: 'Donut-Motors Vintage Auto Gallery' },
    { value: 'Donut-Motors Automobile Dealership', label: 'Donut-Motors Automobile Dealership' },
    { value: 'Donut-Motors Retro Ride Showroom', label: 'Donut-Motors Retro Ride Showroom' },
    { value: 'Donut-Motors Timeless Car Boutique', label: 'Donut-Motors Timeless Car Boutique' },
  ];
}
