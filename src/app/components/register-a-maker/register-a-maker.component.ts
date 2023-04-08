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

  // Valida que la imagen seleccionada para la foto del auto sea de tipo jpeg, webp, png o avif:
  imageValidator(control: AbstractControl): { [key: string]: any } | null {
    const allowedFormats = ['jpg','jpeg', 'webp', 'png', 'avif'];
    const file = control.value;
    if (file && file.name) { // Se comprueba si existe el archivo y el nombre.
      const fileExt = file.name.split('.').pop()?.toLowerCase();
      if (allowedFormats.indexOf(fileExt) === -1) {
        return { invalidImageFormat: true };
      }
    }
    return null;
  }

  // Guarda el formulario.
  onSaveForm() {
    if (this.register_a_maker_form.valid) {
      console.log("Saved!");
      console.log("El nombre del fabricante es: ", this.register_a_maker_form.get('name')?.value);
    }
  }
}
