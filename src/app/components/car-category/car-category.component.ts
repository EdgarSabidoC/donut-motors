import { Component } from '@angular/core';

@Component({
  selector: 'app-car-category',
  templateUrl: './car-category.component.html',
  styleUrls: ['./car-category.component.scss']
})
export class CarCategoryComponent {
  categorypOptions = [
    { value: 'SUV', label: 'SUV' },
    { value: 'Sedan', label: 'Sedan' },
    { value: 'Hatchback', label: 'Hatchback' },
    { value: 'Pickup', label: 'Pickup' },
    { value: 'Coupe', label: 'Coupe' },
    { value: 'Minivan', label: 'Minivan' },
    { value: 'Convertible', label: 'Convertible' },
    { value: 'Wagon', label: 'Wagon' },
    { value: 'Van', label: 'Van' },
  ];
}
