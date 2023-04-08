import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register-a-model',
  templateUrl: './register-a-model.component.html',
  styleUrls: ['./register-a-model.component.scss']
})
export class RegisterAModelComponent {
  register_a_model_form!: FormGroup;
  constructor(private fb: FormBuilder) {}

  // Formulario de registro del modelo de un auto:
  ngOnInit(): void {
    this.register_a_model_form = this.fb.group({
      name: this.fb.control(null, [Validators.required]),
    });
  }

  // Guarda el formulario.
  onSaveForm() {
    if (this.register_a_model_form.valid) {
      console.log("Saved!");
      console.log("El nombre del modelo es: ", this.register_a_model_form.get('name')?.value);
    }
  }
}
