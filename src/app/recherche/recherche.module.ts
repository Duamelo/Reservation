import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RechercheRoutingModule } from './recherche-routing.module';
import { SeeReservationComponent } from './see-reservation/see-reservation.component';
import { NavComponent } from './nav/nav.component';
import { BoxComponent } from './box/box.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedRoutingModule } from '../shared/shared-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { DateComponent } from './date/date.component';
import { DateRetourComponent } from './date-retour/date-retour.component';
import { SaisieComponent } from './saisie/saisie.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormControlName, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { OngletComponent } from './onglet/onglet.component';
import {MatTabsModule} from '@angular/material/tabs';
import { SelectComponent } from './select/select.component';
import { GeolocalisationComponent } from './geolocalisation/geolocalisation.component';




@NgModule({
  declarations: [SeeReservationComponent, NavComponent, BoxComponent, ListComponent, DateComponent, DateRetourComponent, SaisieComponent, OngletComponent, SelectComponent, GeolocalisationComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    RechercheRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatDatepickerModule,
    FormsModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatTabsModule



  ],
  entryComponents: [
    LoginComponent,
    SignupComponent
  ],
  providers:[

  ]
})
export class RechercheModule { }
