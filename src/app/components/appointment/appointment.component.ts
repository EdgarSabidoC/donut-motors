/**
 * Clase que representa el componente de citas para comprar un automóvil.
 */
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, AbstractControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from '@app/services/search.service';
import { Observable } from 'rxjs';
import { HTTPMethodsService } from '@app/services/httpmethods.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
  query!: string;
  date!: Date;

  appointment_booking_form!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private aRoute: ActivatedRoute,
    private router: Router,
    private searchService: SearchService,
    private http: HTTPMethodsService // Agrega el servicio HttpClient en el constructor
  ) {}

  title = this.aRoute.snapshot.data['title'];

  ngOnInit(): void {
    // Obtiene el ID del vehículo desde el query de la ruta:
    if(!this.query){
      this.query = this.router.url.replace("/appointment/", "");
    }

    // Formulario de registro de citas para comprar un auto:
    this.appointment_booking_form = this.fb.group({
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
      dealership: this.fb.control(null, [Validators.required]),
      email: this.fb.control(null, [Validators.required, Validators.email]),
      phone_number: this.fb.control(null, [Validators.required, Validators.minLength(10), Validators.pattern(/^\d{10}$/)]),
      date: this.fb.control(null, [Validators.required, this.pastDateValidator]),
      time: this.fb.control(null, [Validators.required]),
    });
  }

  // Valida que la fecha no esté en el pasado:
  private pastDateValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const dateValue = control.value;

    // Verifica si la fecha está en el pasado:
    const currentDate = new Date();
    if (dateValue < currentDate) {
      return { pastDate: true };
    }

    return null; // Retorna null si la fecha es válida.
  }

  // Guarda el formulario:
  onSaveForm() {
    if (this.query && this.query !== '' && this.appointment_booking_form.valid) {
    // Se obtiene la fecha y hora seleccionadas:
    const selectedDate = this.appointment_booking_form.get('date')?.value;
    const selectedTime = this.appointment_booking_form.get('time')?.value;
    const timeOptions = this.searchService.timeOptions;
    const time = timeOptions.find(option => option.value === selectedTime);

    // Se valida que el formato de hora sea válido:
    if (time && time.label && time.label.match(/^\d{1,2}:\d{2}$/)) {
      const timeParts = time.label.split(':');
      const hour = parseInt(timeParts[0], 10);
      const minute = parseInt(timeParts[1], 10);
      // Se construye la fecha y hora concatenadas:
      this.date = new Date(selectedDate.year, selectedDate.month - 1, selectedDate.day, hour, minute);
    }
      console.log("Saved!");
      console.log("Fecha seleccionada en formato Date:", this.date);
      console.log("El query es: ",this.query);

      // URL de la API
      const url = 'http://localhost:3001/api/appointment/pdf';

      // Construir el cuerpo de la solicitud
      const requestBody = {
        customer_firstname: this.appointment_booking_form.get('first_name')?.value,
        customer_lastname_1: this.appointment_booking_form.get('last_name')?.value,
        customer_lastname_2: null, // Si no se proporciona el valor en el formulario, puedes establecerlo como null o eliminar esta propiedad del objeto
        email: this.appointment_booking_form.get('email')?.value,
        telephone: this.appointment_booking_form.get('phone_number')?.value,
        appointment_date: this.date.toISOString(), // Convierte la fecha a un formato ISO string
        appointment_time: this.appointment_booking_form.get('time')?.value,
        dealership: this.appointment_booking_form.get('dealership')?.value,
        car: this.query
      };

      // Llamada a la API utilizando el método postRequest
      this.postRequest(url, requestBody).subscribe(
        (response) => {
          console.log('API response:', response);
          // Realiza las acciones necesarias con la respuesta de la API
        },
        (error) => {
          console.log('API error:', error);
          // Maneja el error de la llamada a la API
        }
      );
    }
  }

  postRequest(url: string, body: any): Observable<any> {
    return this.http.getRequestPDF(url, body);
  }
}
