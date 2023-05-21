import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent {
  ngOnInit() {
    $('#databaseTable').DataTable();
  }
}
