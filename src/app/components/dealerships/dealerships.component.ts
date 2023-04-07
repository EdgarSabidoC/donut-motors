import { Component } from '@angular/core';

@Component({
  selector: 'app-dealerships',
  templateUrl: './dealerships.component.html',
  styleUrls: ['./dealerships.component.scss']
})
export class DealershipsComponent {

    dealershipOptions = [
    { value: 'dealership0', label: 'Donut-Motors Classic Cars Emporium' },
    { value: 'dealership1', label: 'Donut-Motors Vintage Auto Gallery' },
    { value: 'dealership2', label: 'Donut-Motors Antique Automobile Dealership' },
    { value: 'dealership3', label: 'Donut-Motors Retro Ride Showroom' },
    { value: 'dealership4', label: 'Donut-Motors Timeless Car Boutique' },
  ];

}
