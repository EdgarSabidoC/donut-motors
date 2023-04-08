import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-quote-a-car',
  templateUrl: './quote-a-car.component.html',
  styleUrls: ['./quote-a-car.component.scss']
})
export class QuoteACarComponent implements OnInit {
  quote_a_car_form!: FormGroup;
  constructor(private fb: FormBuilder) {}

  // Formulario de cotización de venta de auto:
  ngOnInit(): void {
    this.quote_a_car_form = this.fb.group({
      maker: this.fb.control(null, [Validators.required]),
      model: this.fb.control(null, [Validators.required]),
      year: this.fb.control(null, [Validators.required, Validators.pattern(/^\d{4}$/), Validators.minLength(1900), Validators.maxLength(2099)]),
      version: this.fb.control(null, [Validators.required]),
      color: this.fb.control(null, [Validators.required]),
      mileage: this.fb.control(null, [Validators.required, Validators.pattern(/^\d$/)]),
      email: this.fb.control(null, [Validators.required, Validators.email]),
      phone_number: this.fb.control(null, [Validators.required, Validators.minLength(10), Validators.pattern(/^\d{10}$/)]),
      dealership: this.fb.control(null, [Validators.required]),
      serial_number: this.fb.control(null, [Validators.required, Validators.pattern(/^\d$/)]),
    });
  }

  // Guarda el formulario.
  onSaveForm() {
    if (this.quote_a_car_form.valid)
      console.log("Saved!");
  }
}
