import { Component } from '@angular/core';

@Component({
  selector: 'app-car-model',
  templateUrl: './car-model.component.html',
  styleUrls: ['./car-model.component.scss']
})
export class CarModelComponent {
  modelOptions = [
    { value: 'carModel1', label: 'Fiesta' },
    { value: 'carModel2', label: 'Corvette' },
    { value: 'carModel3', label: 'GT-R' },
    { value: 'carModel4', label: 'MX-30' },
    { value: 'carModel5', label: 'Rifter' },
  ];
}
