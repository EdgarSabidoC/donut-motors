/**
 * Componente Angular para la cotización de venta de auto.
 *
 * Este componente representa la página de cotización de venta de auto de la aplicación.
 * Contiene la estructura HTML, los estilos CSS y la lógica de negocio asociada a la cotización de venta de auto.
 */
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-quote-a-car',
  templateUrl: './quote-a-car.component.html',
  styleUrls: ['./quote-a-car.component.scss']
})
export class QuoteACarComponent implements OnInit {

  quote_a_car_form!: FormGroup; // Formulario de cotización de venta de auto

  constructor(private fb: FormBuilder) {}

  /**
   * Método del ciclo de vida de Angular que se ejecuta al inicializar el componente.
   *
   * En este método se define la lógica de inicialización del componente, incluyendo la creación
   * del formulario de cotización de venta de auto con sus respectivas validaciones.
   */
  ngOnInit(): void {
    this.quote_a_car_form = this.fb.group({
      maker: this.fb.control(null, [Validators.required]),
      model: this.fb.control(null, [Validators.required]),
      year: this.fb.control(null, [Validators.required, Validators.pattern(/^\d{4}$/), Validators.minLength(1900), Validators.maxLength(2099)]),
      color: this.fb.control(null, [Validators.required]),
      mileage: this.fb.control(null, [Validators.required, Validators.pattern(/^\d+$/)]),
      email: this.fb.control(null, [Validators.required, Validators.email]),
      phone_number: this.fb.control(null, [Validators.required, Validators.pattern(/^\d{10}$/)]),
      dealership: this.fb.control(null, [Validators.required]),
      serial_number: this.fb.control(null, [Validators.required, Validators.pattern(/^\d+$/)]),
    });
  }

  /**
   * Método para guardar el formulario de cotización de venta de auto.
   *
   * Este método se ejecuta al hacer clic en el botón de guardar formulario. Verifica si el formulario
   * es válido antes de realizar cualquier acción adicional.
   */
  onSaveForm() {
    if (this.quote_a_car_form.valid)
      console.log("Saved!");
  }
}

