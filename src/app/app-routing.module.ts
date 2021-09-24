import { ListarAtletaComponent } from './listar-atleta/listar-atleta.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarEventoComponent } from './listar-evento/listar-evento.component';

const routes: Routes = [
  {path: 'listaratleta', component: ListarAtletaComponent },
  {path: 'listarevento', component: ListarEventoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
