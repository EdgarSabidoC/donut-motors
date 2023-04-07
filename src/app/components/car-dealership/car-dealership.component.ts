import { Component } from '@angular/core';

@Component({
  selector: 'app-car-dealership',
  templateUrl: './car-dealership.component.html',
  styleUrls: ['./car-dealership.component.scss']
})
export class CarDealershipComponent {
  dealershipOptions = [
    { value: 'dealership0', label: 'Donut-Motors Classic Cars Emporium' },
    { value: 'dealership1', label: 'Donut-Motors Vintage Auto Gallery' },
    { value: 'dealership2', label: 'Donut-Motors Antique Automobile Dealership' },
    { value: 'dealership3', label: 'Donut-Motors Retro Ride Showroom' },
    { value: 'dealership4', label: 'Donut-Motors Timeless Car Boutique' },
  ];
}
