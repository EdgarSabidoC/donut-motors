import { Component } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent {
  timeOptions = [
    { value: 'time0', label: '8:00' },
    { value: 'time1', label: '8:30' },
    { value: 'time2', label: '9:00' },
    { value: 'time3', label: '9:30' },
    { value: 'time4', label: '10:00' },
    { value: 'time5', label: '10:30' },
    { value: 'time6', label: '11:00' },
    { value: 'time7', label: '11:30' },
    { value: 'time8', label: '12:00' },
    { value: 'time9', label: '12:30' },
    { value: 'time10', label: '13:00' },
    { value: 'time11', label: '13:30' },
    { value: 'time12', label: '14:00' },
    { value: 'time13', label: '14:30' },
    { value: 'time14', label: '15:00' },
    { value: 'time15', label: '15:30' },
    { value: 'time16', label: '16:00' },
    { value: 'time17', label: '16:30' },
    { value: 'time18', label: '17:00' },
  ];
}
