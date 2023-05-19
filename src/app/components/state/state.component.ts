import { Component } from '@angular/core';
import { JsonServiceService } from '@app/services/json-service.service';

declare var $: any;

interface StateData {
  id: number;
  name: string;
  deleted: boolean;
  deletedAt: string;
  createdAt: string;
  updatedAt: string;
}

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent {
  table: any;
  jsonData: any;

  constructor(private JsonServiceService: JsonServiceService) {
    this.JsonServiceService.getJson('http://localhost:3001/api/state')
      .subscribe(data => {
        this.jsonData = data;
        console.log(typeof this.jsonData);
        this.addRowsToTable();
      });
  }

  ngOnInit() {
    $('#databaseTable').DataTable({
      ajax: this.jsonData,
      columns: [
        { data: 'id' },
        { data: 'name' },
        { data: 'deleted' },
        { data: 'deletedAt' },
        { data: 'createdAt' },
        { data: 'updatedAt' },
        {
          orderable: false,
          data: 'update',
          defaultContent: '<button type="button" data-bs-toggle="modal" data-bs-target="#ModifyModal" class="btn btn-sm btn-outline-secondary">Update data</button>',
        },
        {
          orderable: false,
          data: 'remove',
          defaultContent: '<button type="button" data-identificador="delete_row" class="btn btn-sm btn-outline-secondary">Remove data</button>',
        },
      ],
      autoWidth: true
    });
  }
  ngAfterViewInit(): void {
    const table = $('#databaseTable').DataTable();
    const selectedRows: { id: number }[] = table.rows('.selected').data().toArray(); // Array para mantener un registro de las filas seleccionadas
    
    $('#databaseTable tbody').on('click', 'tr', (event: Event) => {
      const target = $(event.currentTarget);
      const rowIndex = table.row(target).index(); // Obtiene el índice de la fila en DataTable
      
      if (target.hasClass('selected')) {
        target.removeClass('selected');
        selectedRows.splice(selectedRows.indexOf(rowIndex), 1); // Elimina la fila del array de seleccionados
      } else {
        target.addClass('selected');
        selectedRows.push(rowIndex); // Agrega la fila al array de seleccionados
      }
    });
    
    $('#databaseTable tbody').on('click', 'button', (event: Event) => {
      event.stopPropagation();
      // Aquí va el código del evento de clic del botón interno
    });
    
    $('#deleteButton').click(() => {
      selectedRows.forEach((rowIndex) => {
        const rowData = table.row(rowIndex).data(); // Obtiene los datos de la fila eliminada
        console.log('Fila eliminada:', rowData);
        table.row(rowIndex).remove(); // Elimina cada fila seleccionada de la tabla
      });
      table.draw(false);
      selectedRows.length = 0; // Vacía el array de seleccionados
    });
    
    $('#databaseTable tbody').on('click', 'button', (event: Event) => {
      event.stopPropagation();
      const target = $(event.target);
      const identifier = target.data('identificador');
      if (identifier === 'delete_row') {
        const row = target.closest('tr');
        const rowData = table.row(row).data();
        console.log('Row data:', rowData);
        table.row(row).remove().draw();
      }
    });
  }
  addRowsToTable() {
    const table = $('#databaseTable').DataTable();
    for (let i = 0; i < this.jsonData.data.length; i++) {
        let item: StateData = this.jsonData.data[i];
        table.row.add(item).draw(false);
    }
  }
}
