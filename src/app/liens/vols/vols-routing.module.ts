import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CotonouComponent } from './cotonou/cotonou.component';
import { OuidahComponent } from './ouidah/ouidah.component';
import { CalaviComponent } from './calavi/calavi.component';
import { ParakouComponent } from './parakou/parakou.component';
import { NatitingouComponent } from './natitingou/natitingou.component';

const routes: Routes = [
  {
  path: 'cotonou', component: CotonouComponent
  },
  {
    path: 'ouidah', component: OuidahComponent
  },
  {
    path: 'calavi', component: CalaviComponent
  },
  {
    path: 'parakou', component: ParakouComponent
  },
  {
    path: 'natitingou', component: NatitingouComponent
  }

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VolsRoutingModule { }
