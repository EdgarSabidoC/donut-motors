/**
 * Componente de registro de un carro.
 * Permite al usuario completar un formulario de registro con información sobre un carro,
 * incluyendo su fabricante, modelo, año, color, kilometraje, descripción, tipo de transmisión,
 * categoría, precio, concesionaria y foto. El formulario incluye validaciones de campos
 * obligatorios, formatos y valores aceptados.
 */
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

  /**
   * Inicializa el formulario de registro de un carro.
   * Define los campos del formulario y sus validaciones correspondientes.
   */
  ngOnInit(): void {
    this.register_a_car_form = this.fb.group({
      maker: this.fb.control(null, [Validators.required]), // Fabricante del carro
      model: this.fb.control(null, [Validators.required]), // Modelo del carro
      year: this.fb.control(null, [Validators.required, Validators.pattern(/^\d{4}$/), Validators.minLength(1900), Validators.maxLength(2099)]), // Año del carro
      color: this.fb.control(null, [Validators.required]), // Color del carro
      mileage: this.fb.control(null, [Validators.required, Validators.pattern(/^\d+$/)]), // Kilometraje del carro
      description: this.fb.control(null, [Validators.required, Validators.minLength(10), Validators.maxLength(1000), Validators.pattern(/^[a-zA-Z0-9\s:,-;.]*$/)]), // Descripción del carro
      transmission: this.fb.control(null, [Validators.required, this.transmissionValidator]), // Tipo de transmisión del carro
      category: this.fb.control(null,[Validators.required]), // Categoría del carro
      price: this.fb.control(null, [Validators.required, Validators.pattern(/^\d+$/)]), // Precio del carro
      dealership: this.fb.control(null, [Validators.required]), // Concesionaria del carro
      photo_image: this.fb.control(null, [Validators.required, this.imageValidator]), // Imagen del carro
      serial_number: this.fb.control(null, [Validators.required, Validators.pattern(/^\d+$/)]), // Número de serie del carro
    });
  }

  /**
   * Valida que la imagen seleccionada para la foto del auto sea de tipo png, jpg, jpeg, webp o avif.
   * @param control El control del formulario que contiene la imagen del carro.
   * @returns Un objeto con una clave de error si la imagen no cumple con los formatos permitidos, o null si es válida.
   */
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

  /**
  * Valida que sólo se puedan ingresar dos cadenas para el campo transmisión: manual o automático.
  * @param control - El control de formulario a validar.
  * @returns - Un objeto con la clave 'invalidTransmision' y valor true si la transmisión es inválida, o null si es válida.
  */
  private transmissionValidator(control: AbstractControl): { [key: string]: any } | null {
    // Se definen las transmisiones permitidas.
    const allowedTransmissions = ['manual', 'automatic'];
    // Se obtiene el valor del control y se convierte a minúsculas.
    const transmission = control.value?.toLowerCase();

    // Se verifica si la transmisión no está en las permitidas.
    if (!allowedTransmissions.includes(transmission)) {
      // Se retorna un objeto con la clave 'invalidTransmision' y valor true.
      return { invalidTransmision: true };
    }

    // Si la transmisión es válida, se retorna null.
    return null;
  }

  /**
  * Guarda el formulario si es válido.
  */
  onSaveForm() {
    // Se verifica si el formulario es válido.
    if (this.register_a_car_form.valid)
      // Se muestra un mensaje en la consola indicando que se ha guardado.
      console.log("¡Guardado!");
  }


}
