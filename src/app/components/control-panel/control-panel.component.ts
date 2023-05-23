import { Component } from '@angular/core';
import { HTTPMethodsService } from '@app/services/httpmethods.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent {
  http!:any;
  constructor(http:HTTPMethodsService){
    this.http = http;
  }

  reportActive(){
    this.http.getRequest("http://localhost:3001/api/report/5/1");
  }
}
