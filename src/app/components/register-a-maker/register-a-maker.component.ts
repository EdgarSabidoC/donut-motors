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

  // Valida que la imagen seleccionada para el logo del fabricante sea de tipo svg, png, webp o avif:
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

  // Guarda el formulario.
  onSaveForm() {
    if (this.register_a_maker_form.valid) {
      console.log("Saved!");
      console.log("El nombre del fabricante es: ", this.register_a_maker_form.get('name')?.value);
    }
  }
}
