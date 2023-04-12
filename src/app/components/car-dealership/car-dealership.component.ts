import { Component } from '@angular/core';

@Component({
  selector: 'app-car-dealership',
  templateUrl: './car-dealership.component.html',
  styleUrls: ['./car-dealership.component.scss']
})
export class CarDealershipComponent {
  dealershipOptions = [
    { value: 'Donut-Motors Classic Cars Emporium', label: 'Donut-Motors Classic Cars Emporium' },
    { value: 'Donut-Motors Vintage Auto Gallery', label: 'Donut-Motors Vintage Auto Gallery' },
    { value: 'Donut-Motors Antique Automobile Dealership', label: 'Donut-Motors Antique Automobile Dealership' },
    { value: 'Donut-Motors Retro Ride Showroom', label: 'Donut-Motors Retro Ride Showroom' },
    { value: 'Donut-Motors Timeless Car Boutique', label: 'Donut-Motors Timeless Car Boutique' },
  ];
}
