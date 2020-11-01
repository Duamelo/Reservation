import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaxiRoutingModule } from './taxi-routing.module';
import { CotonouComponent } from './cotonou/cotonou.component';
import { SharedModule } from 'src/app/shared';

import { OuidahComponent } from './ouidah/ouidah.component';
import { NatitingouComponent } from './natitingou/natitingou.component';
import { CalaviComponent } from './calavi/calavi.component';
import { ParakouComponent } from './parakou/parakou.component';
import { ContainerComponent } from './container/container.component';


@NgModule({
  declarations: [
    CotonouComponent,

    OuidahComponent,
    NatitingouComponent,
    CalaviComponent,
    ParakouComponent,
    ContainerComponent
  
  ],
  imports: [
    CommonModule,
    TaxiRoutingModule,
    SharedModule
  ]
})
export class TaxiModule { }
