import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'taxi', loadChildren: ()=> import('./liens/taxi/taxi.module').then(m=> m.TaxiModule)
  },
  {
    path:'autobus', loadChildren: () => import('./liens/autobus/autobus.module').then(m => m.AutobusModule)
  },
  {
    path:'vols', loadChildren: () => import('./liens/vols/vols.module').then(m => m.VolsModule)
  },
  {
    path: 'login', component: LoginComponent
  }

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
