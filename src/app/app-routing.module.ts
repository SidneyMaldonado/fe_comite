import { ListarAtletaComponent } from './listar-atleta/listar-atleta.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComiteComponent } from './listar-comite/listar-comite.component';
import { ListarProvinciaComponent } from './listar-provincia/listar-provincia.component';

const routes: Routes = [
  {path: 'listaratleta', component: ListarAtletaComponent},
  {path: 'listarcomite', component: ListarComiteComponent},
  {path: 'listarprovincia', component: ListarProvinciaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
