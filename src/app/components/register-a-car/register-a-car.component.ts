import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register-a-car',
  templateUrl: './register-a-car.component.html',
  styleUrls: ['./register-a-car.component.scss']
})
export class RegisterACarComponent implements OnInit {

  register_a_car_form!: FormGroup;
  constructor(private fb: FormBuilder) {}

  // Formulario de registro de usuario:
  ngOnInit(): void {
    this.register_a_car_form = this.fb.group({
      maker: this.fb.control(null, [Validators.required]),
      model: this.fb.control(null, [Validators.required]),
      year: this.fb.control(null, [Validators.required, Validators.pattern(/^\d{4}$/)]),
      version: this.fb.control(null, [Validators.required]),
      color: this.fb.control(null, [Validators.required]),
      mileage: this.fb.control(null, [Validators.required, Validators.pattern(/^\d$/)]),
      description: this.fb.control(null, [Validators.required]),
      price: this.fb.control(null, [Validators.required, Validators.pattern(/^\d$/)]),
      dealership: this.fb.control(null, [Validators.required]),
    });
  }

  // Guarda el formulario.
  onSaveForm() {
    if (this.register_a_car_form.valid)
      console.log("Saved!");
  }

}