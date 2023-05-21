import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-car-model-db',
  templateUrl: './car-model-db.component.html',
  styleUrls: ['./car-model-db.component.scss']
})
export class CarModelDbComponent {
  ngOnInit() {
    $('#databaseTable').DataTable();
  }
}
