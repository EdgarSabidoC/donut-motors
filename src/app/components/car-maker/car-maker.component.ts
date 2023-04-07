import { Component } from '@angular/core';

@Component({
  selector: 'app-car-maker',
  templateUrl: './car-maker.component.html',
  styleUrls: ['./car-maker.component.scss']
})
export class CarMakerComponent {
  makerOptions = [
    { value: 'carMaker1', label: 'Ford' },
    { value: 'carMaker2', label: 'Chevrolet' },
    { value: 'carMaker3', label: 'Nissan' },
    { value: 'carMaker4', label: 'Mazda' },
    { value: 'carMaker5', label: 'Peugeot' },
  ];
}
