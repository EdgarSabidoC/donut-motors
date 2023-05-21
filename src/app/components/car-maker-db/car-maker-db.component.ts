import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-car-maker-db',
  templateUrl: './car-maker-db.component.html',
  styleUrls: ['./car-maker-db.component.scss']
})
export class CarMakerDbComponent {
  ngOnInit() {
    $('#databaseTable').DataTable();
  }
}
