import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-register-a-color',
  templateUrl: './register-a-color.component.html',
  styleUrls: ['./register-a-color.component.scss']
})
export class RegisterAColorComponent {
  register_a_color_form!: FormGroup;
  constructor(private fb: FormBuilder) {}

  // Formulario de registro para el color de auto:
  ngOnInit(): void {
    this.register_a_color_form = this.fb.group({
      color_name: this.fb.control(null, [Validators.required])
    });
  }

  // Guarda el formulario.
  onSaveForm() {
    if (this.register_a_color_form.valid)
      console.log("Saved!");
  }
}
