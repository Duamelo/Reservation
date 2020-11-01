import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeeReservationComponent } from './see-reservation/see-reservation.component';

const routes: Routes = [
  {
    path:'', component:SeeReservationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RechercheRoutingModule { }
