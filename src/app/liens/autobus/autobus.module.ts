import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutobusRoutingModule } from './autobus-routing.module';
import { ParakouComponent } from './parakou/parakou.component';
import { CotonouComponent } from './cotonou/cotonou.component';
import { CalaviComponent } from './calavi/calavi.component';
import { OuidahComponent } from './ouidah/ouidah.component';
import { ContainerComponent } from './container/container.component';
import { NatitingouComponent } from './natitingou/natitingou.component';
import { SharedModule } from 'src/app/shared';


@NgModule({
  declarations: [ParakouComponent, CotonouComponent, CalaviComponent, OuidahComponent, ContainerComponent, NatitingouComponent],
  imports: [
    CommonModule,
    AutobusRoutingModule,
    SharedModule
  ]
})
export class AutobusModule { }
