import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
/*import { ActivatedRoute, Router } from '@angular/router';*/
/*import { AuthService } from '../auth.service';*/

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  public loginInvalid: boolean;
  hide = true;
  constructor() {}

  async ngOnInit() {
  }

}