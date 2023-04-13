/**
 * Componente para el registro de un fabricante de autos.
 * Permite ingresar el nombre del fabricante y seleccionar una imagen de logo.
 */
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register-a-maker',
  templateUrl: './register-a-maker.component.html',
  styleUrls: ['./register-a-maker.component.scss']
})
export class RegisterAMakerComponent {
  register_a_maker_form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  // Formulario de registro del fabricante de autos:
  ngOnInit(): void {
    this.register_a_maker_form = this.fb.group({
      name: this.fb.control(null, [Validators.required]),
      logo_image: this.fb.control(null, [Validators.required, this.imageValidator]),
    });
  }

  /**
   * Valida que la imagen seleccionada para el logo del fabricante sea de tipo svg, png, webp o avif.
   * Se utiliza como un validador personalizado en el formulario.
   * @param control - Control a validar, en este caso el control del logo de la imagen.
   * @returns - Un objeto con la clave 'invalidImageFormat' si la imagen tiene un formato no permitido, o null si es válida.
   */
  private imageValidator(control: AbstractControl): { [key: string]: any } | null {
    const allowedFormats = ['svg', 'png', 'webp', 'avif'];
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
   * Guarda el formulario si es válido.
   * Se llama al hacer clic en el botón de guardar.
   */
  onSaveForm() {
    // Se verifica si el formulario es válido.
    if (this.register_a_maker_form.valid) {
      // Se muestra un mensaje en la consola indicando que se ha guardado:
      console.log("¡Guardado!");
      // Se muestra en la consola el nombre del fabricante ingresado:
      console.log("El nombre del fabricante es: ", this.register_a_maker_form.get('name')?.value);
    }
  }
}
