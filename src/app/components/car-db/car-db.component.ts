import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-car-db',
  templateUrl: './car-db.component.html',
  styleUrls: ['./car-db.component.scss']
})
export class CarDbComponent {
  ngOnInit() {
    $('#databaseTable').DataTable();
  }
}
