import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CotonouComponent } from './cotonou/cotonou.component';
import { OuidahComponent } from './ouidah/ouidah.component';
import { NatitingouComponent } from './natitingou/natitingou.component';
import { CalaviComponent } from './calavi/calavi.component';
import { ParakouComponent } from './parakou/parakou.component';

const routes: Routes = [
 {
   path: 'cotonou', component: CotonouComponent
 },
 {
   path: 'ouidah', component: OuidahComponent
 },
 {
   path: 'natitingou', component: NatitingouComponent
 },
 {
   path: 'calavi', component: CalaviComponent
 },
 
{
  path: 'parakou', component: ParakouComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxiRoutingModule { }
