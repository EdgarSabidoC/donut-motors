/**
 * Componente para el registro de usuario.
 * Permite a los usuarios registrarse mediante un formulario de registro.
 */
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

  /**
   * Inicializa el formulario de registro de usuario.
   * Define las validaciones y los controles del formulario.
   */
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

  /**
   * Validador personalizado para verificar que las contraseñas coincidan.
   * Comprueba si las contraseñas son iguales y devuelve un error si no lo son.
   */
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

  /**
   * Validador personalizado para verificar la fortaleza de la contraseña.
   * Comprueba si la contraseña cumple con los requisitos de seguridad y devuelve errores correspondientes si no los cumple.
   */
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

  /**
   * Guarda el formulario de registro de usuario.
   * Verifica si el formulario es válido antes de guardar los datos.
   */
  onSaveForm() {
    if (this.sign_up_form.valid)
      console.log("Saved!");
  }

}
