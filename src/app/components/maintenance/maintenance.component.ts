import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss']
})
export class MaintenanceComponent {
  ngOnInit() {
    $('#databaseTable').DataTable();
  }
}
