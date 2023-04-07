import { Component } from '@angular/core';

@Component({
  selector: 'app-car-color',
  templateUrl: './car-color.component.html',
  styleUrls: ['./car-color.component.scss']
})
export class CarColorComponent {
  colorOptions = [
    { value: 'carColor1', label: 'Blanco' },
    { value: 'carColor2', label: 'Azul' },
    { value: 'carColor3', label: 'Negro' },
    { value: 'carColor4', label: 'Plateado' },
    { value: 'carColor5', label: 'Rojo' },
    { value: 'carColor6', label: 'Dorado' },
    { value: 'carColor7', label: 'Verde' },
    { value: 'carColor8', label: 'Amarillo' },
    { value: 'carColor9', label: 'Naranja' },
    { value: 'carColor10', label: 'Gris' },
  ];
}
