/**
 * Componente Angular para el formulario de inicio de sesión de usuario.
 *
 * Este componente representa el formulario de inicio de sesión de usuario en la aplicación.
 * Contiene la estructura HTML, los estilos CSS, y la lógica de negocio asociada al formulario.
 */
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login_form!: FormGroup; // Formulario de inicio de sesión de usuario

  constructor(private fb: FormBuilder) {}

  /**
   * Método del ciclo de vida OnInit.
   *
   * Este método se ejecuta cuando el componente es inicializado.
   * Se utiliza para configurar el formulario de inicio de sesión de usuario.
   */
  ngOnInit(): void {
    this.login_form = this.fb.group({
      email: this.fb.control(null, [Validators.required, Validators.email]), // Campo de correo electrónico con validación requerida y de formato de correo electrónico
      password: this.fb.control(null, [Validators.required, Validators.minLength(8)]), // Campo de contraseña con validación requerida y longitud mínima de 8 caracteres
    });
  }

  /**
   * Método para guardar el formulario.
   *
   * Este método se ejecuta cuando se presiona el botón de guardar en el formulario.
   * Verifica si el formulario es válido y muestra un mensaje de "Guardado" en la consola.
   */
  onSaveForm() {
    if (this.login_form.valid){
      console.log("Guardado!");
    }
  }
}

