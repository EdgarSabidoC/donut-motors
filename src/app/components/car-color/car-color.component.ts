import { Component } from '@angular/core';

@Component({
  selector: 'app-car-color',
  templateUrl: './car-color.component.html',
  styleUrls: ['./car-color.component.scss']
})
export class CarColorComponent {
  colorOptions = [
    { value: 'White', label: 'White' },
    { value: 'Blue', label: 'Blue' },
    { value: 'Black', label: 'Black' },
    { value: 'Silver', label: 'Silver' },
    { value: 'Red', label: 'Red' },
    { value: 'Gold', label: 'Gold' },
    { value: 'Green', label: 'Green' },
    { value: 'Yellow', label: 'Yellow' },
    { value: 'Orange', label: 'Orange' },
    { value: 'Grey', label: 'Grey' },
  ];
}
