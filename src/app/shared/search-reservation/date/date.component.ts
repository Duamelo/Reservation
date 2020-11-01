import {Component, OnInit} from '@angular/core';
/*import {MatDatepickerInputEvent} from '@angular/material/datepicker';*/
import {FormControl} from '@angular/forms';
/* @title Datepicker input and change events */
@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  constructor() { }

  ngOnInit(): void {

  }
 
}
