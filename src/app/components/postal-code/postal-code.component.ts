import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-postal-code',
  templateUrl: './postal-code.component.html',
  styleUrls: ['./postal-code.component.scss']
})
export class PostalCodeComponent {
  table: any;

  ngOnInit() {
    $('#databaseTable').DataTable({
      ajax: '../assets/arrTest/postal_code.txt',
      columns: [
        { data: 'id' },
        { data: 'code' },
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
}
