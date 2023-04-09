import { Component } from '@angular/core';

@Component({
  selector: 'app-car-category',
  templateUrl: './car-category.component.html',
  styleUrls: ['./car-category.component.scss']
})
export class CarCategoryComponent {
  categorypOptions = [
    { value: 'category0', label: 'SUV' },
    { value: 'category1', label: 'Sedan' },
    { value: 'category2', label: 'Hatchback' },
    { value: 'category3', label: 'Pickup' },
    { value: 'category4', label: 'Coupe' },
    { value: 'category5', label: 'Minivan' },
    { value: 'category6', label: 'Convertible' },
    { value: 'category7', label: 'Wagon' },
    { value: 'category8', label: 'Van' },
  ];
}
