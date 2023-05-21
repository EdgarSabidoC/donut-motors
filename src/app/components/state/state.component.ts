import { Component } from '@angular/core';
import { HTTPMethodsService } from '@app/services/httpmethods.service';

declare var $: any;

interface StateData {
  url: string;
  body: {
    "name": string;
  };
}

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})

export class StateComponent {
  //tabla de datos
  table: any;
  //url de la api de la DB con la ruta a donde hace las peticiones CRUD
  url: string = "http://localhost:3001/api/state";
  storeData: StateData = { url: '', body: { name: '' } };

  constructor(private HTTPMethodsService: HTTPMethodsService) {}

  ngOnInit() {
    $('#databaseTable').DataTable({
      ajax: this.url,
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
          defaultContent: '<button type="button" data-identificador="update_row" data-bs-toggle="modal" data-bs-target="#ModifyModal" class="btn btn-sm btn-outline-secondary">Update data</button>',
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
    //se selecciona por medio del id la tabla sobre la cual se va a estar trabajando
    //aunque el plugin dataBaseTable tiene que crear su propia tabla todavía necesita que exista una plantilla dentro del HTML
    const table = $('#databaseTable').DataTable();
    const selectedRows: { id: number }[] = table.rows('.selected').data().toArray(); // Array para mantener un registro de las filas seleccionadas

    //función que selecciona las filas de la tabla, las información de las filas seleccionadas se añade a un arreglo para llevar un resgistro.
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
    
    //función que evita que se seleccionen las filas cuando se interactua con los botones
    $('#databaseTable tbody').on('click', 'button', (event: Event) => {
      event.stopPropagation();
    });
    
    //función que elimina todas las filas seleccionadas cuando se interactua con el boton de borrado ubicado en la sección superior del sitio
    $('#deleteButton').click(() => {
      selectedRows.forEach((rowIndex) => {
        const rowData = table.row(rowIndex).data(); // Obtiene los datos de la fila eliminada
        console.log('Fila eliminada:', rowData);
        var idDelete = this.url + "/" + rowData["id"].toString();
        this.HTTPMethodsService.deleteRequest(idDelete).subscribe(
          response => {
            console.log('Respuesta:', response);
            table.ajax.url(this.url).load();
          },
          error => {
            console.error('Error:', error);
          }
        );
      });
      selectedRows.length = 0; // Vacía el array de seleccionados
    });

    $('#databaseTable tbody').on('click', 'button', (event: Event) => {
      event.stopPropagation();
      const target = $(event.target);
      const identifier = target.data('identificador');
    
      // Condición para el botón de eliminar datos
      if (identifier === 'delete_row') {
        const row = target.closest('tr');
        const rowData = table.row(row).data();
        const idDelete = this.url + "/" + rowData["id"].toString();
        
        this.HTTPMethodsService.deleteRequest(idDelete).subscribe(
          response => {
            console.log('Respuesta:', response);
            table.ajax.url(this.url).load();
          },
          error => {
            console.error('Error:', error);
          }
        );
      }
    
      // Condición para el botón de actualizar datos
      if (identifier === 'update_row') {
        const row = target.closest('tr');
        const rowData = table.row(row).data();
        this.storeData.url = this.url + "/" + rowData["id"].toString();
      }
    });
    
    // Función que elimina todas las filas seleccionadas cuando se interactúa con el botón de borrado ubicado en la sección superior del sitio
    $('#updateButton').click(() => {
      this.storeData.body.name = (<HTMLInputElement>document.getElementById('stateUpdate')).value;
      
      this.HTTPMethodsService.putRequest(this.storeData.url, this.storeData.body).subscribe(
        response => {
          console.log('Respuesta:', response);
          table.ajax.url(this.url).load();
        },
        error => {
          console.error('Error:', error);
        }
      );
    
      this.storeData.url = "";
      this.storeData.body.name = "";
    });

    // Función que añade nueva información a la base de datos
    $('#addButton').click(() => {
      this.storeData.url = this.url;
      this.storeData.body.name = (<HTMLInputElement>document.getElementById('stateAdd')).value;
      
      this.HTTPMethodsService.postRequest(this.storeData.url, this.storeData.body).subscribe(
        response => {
          console.log('Respuesta:', response);
          table.ajax.url(this.url).load();
        },
        error => {
          console.error('Error:', error);
        }
      );
    
      this.storeData.url = "";
      this.storeData.body.name = "";
    });
  }
}
