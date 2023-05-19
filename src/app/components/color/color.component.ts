import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent {
  ngOnInit() {
    $('#databaseTable').DataTable();
  }
}
