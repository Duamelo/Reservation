import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VolsRoutingModule } from './vols-routing.module';
import { CalaviComponent } from './calavi/calavi.component';
import { CotonouComponent } from './cotonou/cotonou.component';
import { OuidahComponent } from './ouidah/ouidah.component';
import { ParakouComponent } from './parakou/parakou.component';
import { ContainerComponent } from './container/container.component';
import { SharedModule } from 'src/app/shared';
import { NatitingouComponent } from './natitingou/natitingou.component';


@NgModule({
  declarations: [
    CalaviComponent, 
    CotonouComponent, 
    OuidahComponent, 
    ParakouComponent, 
    ContainerComponent, NatitingouComponent
  ],
  imports: [
    CommonModule,
    VolsRoutingModule,
    SharedModule
  ]
})
export class VolsModule { }
