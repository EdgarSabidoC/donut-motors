import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-maintenance-type',
  templateUrl: './maintenance-type.component.html',
  styleUrls: ['./maintenance-type.component.scss']
})
export class MaintenanceTypeComponent {
  ngOnInit() {
    $('#databaseTable').DataTable();
  }
}
