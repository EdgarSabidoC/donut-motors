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

  ngOnInit(): void {
    this.sign_up_form = this.fb.group({
      first_name:  this.fb.control(null, Validators.required),
      last_name: this.fb.control(null, Validators.required),
      email: this.fb.control(null, Validators.required),
      postal_code: this.fb.control(null, Validators.required),
      phone_number: this.fb.control(null, [Validators.required, Validators.minLength(10)]),
      password: this.fb.control(null, [Validators.required, Validators.minLength(8)]),
      confirm_password: this.fb.control(null, [Validators.required, Validators.minLength(8)]),
    }, { validators: this.passwordMatchingValidator('password','confirm_password')});
  }

  // Valida que el valor de dos contraseñas sean iguales:
  passwordMatchingValidator(passwordA: string, passwordB: string): ValidatorFn {
    return(control: AbstractControl): ValidationErrors | null => {
      const formGroup = control as FormGroup;
      const valueOfPasswordA = formGroup.get(passwordA)?.value;
      const valueOfPasswordB = formGroup.get(passwordB)?.value;

      // Si las contraseñas son diferentes se retorna un error, si no, un null.
      if (valueOfPasswordA !== valueOfPasswordB) {
        return null;
      } else {
        return { valuesDoNotMatch: true };
      }
    }
  }

}
