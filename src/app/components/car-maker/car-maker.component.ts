import { Component } from '@angular/core';

@Component({
  selector: 'app-car-maker',
  templateUrl: './car-maker.component.html',
  styleUrls: ['./car-maker.component.scss']
})
export class CarMakerComponent {
  makerOptions = [
    { value: 'Chevrolet', label: 'Chevrolet' },
    { value: 'Ford', label: 'Ford' },
    { value: 'Mazda', label: 'Mazda' },
    { value: 'Nissan', label: 'Nissan' },
    { value: 'Peugeot', label: 'Peugeot' },
  ];
}
