import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, ValidatorFn, AbstractControl, ValidationErrors, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  sign_up_form!: FormGroup;
  constructor(private fb: FormBuilder) {}

  // Formulario de registro de usuario:
  ngOnInit(): void {
    this.sign_up_form = this.fb.group({
      first_name:  this.fb.control(null, Validators.required),
      last_name: this.fb.control(null, Validators.required),
      email: this.fb.control(null, Validators.required),
      postal_code: this.fb.control(null, Validators.required),
      phone_number: this.fb.control(null, [Validators.required, Validators.minLength(10)]),
      password: this.fb.control(null, [Validators.required, Validators.minLength(8)]),
      confirm_password: this.fb.control(null, [Validators.required, Validators.minLength(8)]),
    }, { validators: this.passwordMatchingValidator  });
  }

  // Valida que las cadenas de los campos de password y confirm_password sean iguales.
  private passwordMatchingValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirm_password');
    if (control.get('confirm_password')?.value !== null &&
        control.get('confirm_password')?.value !== undefined &&
        control.get('confirm_password')?.value !== "" &&
        password?.value !== confirmPassword?.value) {
      return { notMatched: true };
    }
    else {
      return null;
    }
  }

  // Guarda el formulario.
  onSaveForm() {
    console.log("Saved!");
  }

}
