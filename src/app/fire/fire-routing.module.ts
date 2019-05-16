import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { FotoComponent } from '../components/foto/foto.component';
import { CargarComponent } from '../components/cargar/cargar.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'foto', component: FotoComponent},
  {path: 'cargarFoto', component: CargarComponent},
  {path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class FireRoutingModule { }
