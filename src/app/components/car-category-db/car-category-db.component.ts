import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-car-category-db',
  templateUrl: './car-category-db.component.html',
  styleUrls: ['./car-category-db.component.scss']
})
export class CarCategoryDbComponent {
  ngOnInit() {
    $('#databaseTable').DataTable();
  }
}
