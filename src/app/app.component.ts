/**
 * Clase que representa el componente principal de la aplicación Donut Motors.
 * Este componente define la estructura y comportamiento de la página principal de la aplicación.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**
   * Título de la aplicación.
   * @type {string}
   */
  title = 'donut-motors';
}
