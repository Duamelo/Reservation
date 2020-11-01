import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
/* @title Datepicker input and change events */
@Component({
  selector: 'app-date-retour',
  templateUrl: './date-retour.component.html',
  styleUrls: ['./date-retour.component.css']
})
export class DateRetourComponent implements OnInit {
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  constructor() { }

  ngOnInit(): void {
  }

}
