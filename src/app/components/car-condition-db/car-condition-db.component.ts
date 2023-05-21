import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-car-condition-db',
  templateUrl: './car-condition-db.component.html',
  styleUrls: ['./car-condition-db.component.scss']
})
export class CarConditionDbComponent {
  ngOnInit() {
    $('#databaseTable').DataTable();
  }
}
