/**
 * Componente para el registro de un modelo de auto.
 * Permite ingresar el nombre del modelo.
 */
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-a-model',
  templateUrl: './register-a-model.component.html',
  styleUrls: ['./register-a-model.component.scss']
})
export class RegisterAModelComponent {
  register_a_model_form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  // Formulario de registro del modelo de un auto:
  ngOnInit(): void {
    this.register_a_model_form = this.fb.group({
      name: this.fb.control(null, [Validators.required]),
    });
  }

  /**
   * Guarda el formulario si es válido.
   * Se llama al hacer clic en el botón de guardar.
   */
  onSaveForm() {
    // Se verifica si el formulario es válido.
    if (this.register_a_model_form.valid) {
      // Se muestra un mensaje en la consola indicando que se ha guardado:
      console.log("¡Guardado!");
      // Se muestra en la consola el nombre del modelo ingresado:
      console.log("El nombre del modelo es: ", this.register_a_model_form.get('name')?.value);
    }
  }
}
