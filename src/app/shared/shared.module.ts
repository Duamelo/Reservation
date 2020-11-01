import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchReservationComponent } from './search-reservation/search-reservation.component';
import { BannerComponent } from './banner/banner.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';
import { SaisieComponent } from './search-reservation/saisie/saisie.component';
import { DateComponent } from './search-reservation/date/date.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { LoginComponent } from '../login/login.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DateRetourComponent } from './search-reservation/date-retour/date-retour.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [NavbarComponent, FooterComponent, SearchReservationComponent, BannerComponent, SignupComponent, SaisieComponent, DateComponent, DateRetourComponent ],

  imports: [
    CommonModule,
    SharedRoutingModule,
    MatDialogModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
   ],
  exports:[
    NavbarComponent,
    FooterComponent,
    SearchReservationComponent,
    BannerComponent,
    SignupComponent,
    DateComponent,
    DateRetourComponent,
    SaisieComponent
  ],
  entryComponents:[
 LoginComponent,
 SignupComponent
  ]
})
export class SharedModule { }
