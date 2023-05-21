import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent {
  ngOnInit() {
    $('#databaseTable').DataTable();
  }
}
