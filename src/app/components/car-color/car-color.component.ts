import { Component } from '@angular/core';

@Component({
  selector: 'app-car-color',
  templateUrl: './car-color.component.html',
  styleUrls: ['./car-color.component.scss']
})
export class CarColorComponent {
  colorOptions = [
    { value: 'Blanco', label: 'Blanco' },
    { value: 'Azul', label: 'Azul' },
    { value: 'Negro', label: 'Negro' },
    { value: 'Plateado', label: 'Plateado' },
    { value: 'Rojo', label: 'Rojo' },
    { value: 'Dorado', label: 'Dorado' },
    { value: 'Verde', label: 'Verde' },
    { value: 'Amarillo', label: 'Amarillo' },
    { value: 'Naranja', label: 'Naranja' },
    { value: 'Gris', label: 'Gris' },
  ];
}
