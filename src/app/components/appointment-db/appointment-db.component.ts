import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-appointment-db',
  templateUrl: './appointment-db.component.html',
  styleUrls: ['./appointment-db.component.scss']
})
export class AppointmentDbComponent {
  ngOnInit() {
    $('#databaseTable').DataTable();
  }
}
