import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

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
      year: this.fb.control(null, [Validators.required, Validators.pattern(/^\d{4}$/), Validators.minLength(1900), Validators.maxLength(2099)]),
      color: this.fb.control(null, [Validators.required]),
      mileage: this.fb.control(null, [Validators.required, Validators.pattern(/^\d+$/)]),
      description: this.fb.control(null, [Validators.required, Validators.minLength(10), Validators.maxLength(1000), Validators.pattern(/^[a-zA-Z0-9\s:,-;.]*$/)]),
      transmision: this.fb.control(null, [Validators.required, this.transmisionValidator]),
      category: this.fb.control(null,[Validators.required]),
      price: this.fb.control(null, [Validators.required, Validators.pattern(/^\d+$/)]),
      dealership: this.fb.control(null, [Validators.required]),
      photo_image: this.fb.control(null, [Validators.required, this.imageValidator]),
      serial_number: this.fb.control(null, [Validators.required, Validators.pattern(/^\d+$/)]),
    });
  }

  // Valida que la imagen seleccionada para la foto del auto sea de tipo png, jpg, jpeg, webp o avif:
  private imageValidator(control: AbstractControl): { [key: string]: any } | null {
    const allowedFormats = ['png', 'jpg', 'jpeg', 'webp', 'avif'];
    const file = control.value; // Obtén el valor del control
    if (file) {
      const fileExt = file.split('.').pop()?.toLowerCase();
      if (allowedFormats.indexOf(fileExt) === -1) {
        return { invalidImageFormat: true };
      }
    }
    return null;
  }

  // Valida que sólo se puedan ingresar dos cadenas para el campo transmisión: manual o automatic.
  private transmisionValidator(control: AbstractControl): { [key: string]: any } | null {
    const allowedTransmisions = ['manual', 'automatic'];
    const transmision = control.value?.toLowerCase();

    if (!allowedTransmisions.includes(transmision)) {
      return { invalidTransmision: true };
    }

    return null;
}

  // Guarda el formulario.
  onSaveForm() {
    if (this.register_a_car_form.valid)
      console.log("Saved!");
  }

}
