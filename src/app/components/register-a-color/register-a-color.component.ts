/**
 * Componente para el registro de un color de auto.
 */
import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register-a-color',
  templateUrl: './register-a-color.component.html',
  styleUrls: ['./register-a-color.component.scss']
})
export class RegisterAColorComponent {
  register_a_color_form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  /**
   * Formulario de registro para el color de auto.
   * Se inicializa en el método ngOnInit() del ciclo de vida del componente.
   */
  ngOnInit(): void {
    // Se crea el formulario utilizando FormBuilder y se asigna a la propiedad register_a_color_form.
    this.register_a_color_form = this.fb.group({
      color_name: this.fb.control(null, [Validators.required])
    });
  }

  /**
   * Guarda el formulario si es válido.
   * Se llama al hacer clic en el botón de guardar.
   */
  onSaveForm() {
    // Se verifica si el formulario es válido.
    if (this.register_a_color_form.valid)
      // Se muestra un mensaje en la consola indicando que se ha guardado.
      console.log("¡Guardado!");
  }
}
