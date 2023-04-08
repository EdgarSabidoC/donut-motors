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

  // Formulario de registro de la sede del concesionario de autos:
  ngOnInit(): void {
    this.register_a_dealership_form = this.fb.group({
      name: this.fb.control(null, [Validators.required]),
      address: this.fb.control(null, [Validators.required]),
      phone_number: this.fb.control(null, [Validators.required, Validators.minLength(10), Validators.pattern(/^\d{10}$/)]),
      house_number: this.fb.control(null, [Validators.required]),
      street: this.fb.control(null, [Validators.required]),
      intersections: this.fb.control(null, [Validators.required]),
      neighbordhood: this.fb.control(null, [Validators.required]),
      postal_code: this.fb.control(null, [Validators.required, Validators.pattern(/^\d{5}$/)]),
    });
  }

  // Guarda el formulario.
  onSaveForm() {
    if (this.register_a_dealership_form.valid)
      console.log("Saved!");
  }
}
