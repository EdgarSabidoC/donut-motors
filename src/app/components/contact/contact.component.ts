/**
 * Componente Angular para la página de "Contacto".
 *
 * Este componente representa la página de "Contacto" de la aplicación.
 * Contiene la estructura HTML y los estilos CSS asociados a esta página.
 */
import { Component } from '@angular/core';
//import * as nodemailer from 'nodemailer';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  /*constructor() { }
  async sendEmail() {

    const name = (<HTMLInputElement>document.getElementById('name')).value;
    const email = (<HTMLInputElement>document.getElementById('email')).value;
    const phone = (<HTMLInputElement>document.getElementById('phone')).value;
    const message = (<HTMLInputElement>document.getElementById('message')).value;

    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
          user: 'burnice.wilderman82@ethereal.email',
          pass: 'a2n7xgWg9mhSDFyf2c'
      }
  });

    const mailOptions = {
      from: email,
      to: 'a19216343@alumnos.uady.mx',
      subject: 'Nuevo mensaje de contacto',
      html: `<p>Nombre: ${name}</p>
             <p>Email: ${email}</p>
             <p>Teléfono: ${phone}</p>
             <p>Mensaje: ${message}</p>`
    };

    try {
      await transporter.sendMail(mailOptions);
      alert('¡El mensaje se ha enviado con éxito!');
    } catch (error) {
      alert('Ha ocurrido un error al enviar el mensaje.');
      console.log(error);
    }
  }*/
}
