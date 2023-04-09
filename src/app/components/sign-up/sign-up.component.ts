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
      first_name:  this.fb.control(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
        Validators.pattern(/^[a-zA-Z ]+$/)
      ]),
      last_name: this.fb.control(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
        Validators.pattern(/^[a-zA-Z ]+$/)
      ]),
      email: this.fb.control(null, [Validators.required, Validators.email]),
      postal_code: this.fb.control(null, [Validators.required, Validators.pattern(/^\d{5}$/)]),
      phone_number: this.fb.control(null, [Validators.required, Validators.minLength(10), Validators.pattern(/^\d{10}$/)]),
      password: this.fb.control(null, [Validators.required, Validators.minLength(8), this.passwordValidator]),
      confirm_password: this.fb.control(null, [Validators.required, Validators.minLength(8), this.passwordValidator]),
    }, { validators: this.passwordMatchingValidator  });
  }

  // Valida que las cadenas de los campos de password y confirm_password sean iguales.
  private passwordMatchingValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirm_password');
    return (confirmPassword?.value !== null &&
        confirmPassword?.value !== undefined &&
        confirmPassword?.value !== "" &&
        password?.value !== confirmPassword?.value) ?
      { notMatched: true } :
      null;
  }

  // Valida que la contraseña tenga cuando menos una letra mayúscula, un número, un símbolo y tiene 8 caracteres:
  private passwordValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.value;
    if (password && password.length >= 8) {
      const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]+$/;
      // Si no tiene una letra mayúscula, un número y un símbolo.
      if (!regex.test(password)) {
        return { symbolRequired: true, numberRequired: true, uppercaseRequired: true };
      }
    } else {
      // La contraseña no cumple el mínimo de caracteres:
      return { minLength: true };
    }
    // Si la contraseña cumple con todo lo requerido:
    return null;
  }

  // Guarda el formulario.
  onSaveForm() {
    if (this.sign_up_form.valid)
      console.log("Saved!");
  }

}
