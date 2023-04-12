import { Component } from '@angular/core';

@Component({
  selector: 'app-car-model',
  templateUrl: './car-model.component.html',
  styleUrls: ['./car-model.component.scss']
})
export class CarModelComponent {
  modelOptions = [
    { value: 'Corvette', label: 'Corvette' },
    { value: 'Fiesta', label: 'Fiesta' },
    { value: 'GT-R', label: 'GT-R' },
    { value: 'MX-30', label: 'MX-30' },
    { value: 'Rifter', label: 'Rifter' },
  ];
}
