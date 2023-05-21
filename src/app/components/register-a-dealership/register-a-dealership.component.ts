/**
 * Componente para el registro de una sede de concesionario de autos.
 */
import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register-a-dealership',
  templateUrl: './register-a-dealership.component.html',
  styleUrls: ['./register-a-dealership.component.scss']
})
export class RegisterADealershipComponent {
  register_a_dealership_form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  /**
   * Formulario de registro de una sede de concesionario de autos.
   * Se inicializa en el método ngOnInit() del ciclo de vida del componente.
   */
  ngOnInit(): void {
    // Se crea el formulario utilizando FormBuilder y se asigna a la propiedad register_a_dealership_form.
    this.register_a_dealership_form = this.fb.group({
      name: this.fb.control(null, [Validators.required]),
      phone_number: this.fb.control(null, [Validators.required, Validators.pattern(/^\d{10}$/)]),
      house_number: this.fb.control(null, [Validators.required]),
      street: this.fb.control(null, [Validators.required]),
      intersections: this.fb.control(null, [Validators.required]),
      neighborhood: this.fb.control(null, [Validators.required]),
      postal_code: this.fb.control(null, [Validators.required, Validators.pattern(/^\d{5}$/)]),
    });
  }

  /**
   * Guarda el formulario si es válido.
   * Se llama al hacer clic en el botón de guardar.
   */
  onSaveForm() {
    // Se verifica si el formulario es válido.
    if (this.register_a_dealership_form.valid)
      // Se muestra un mensaje en la consola indicando que se ha guardado.
      console.log("¡Guardado!");
  }
}
