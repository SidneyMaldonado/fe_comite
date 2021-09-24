import { ListarAtletaComponent } from './listar-atleta/listar-atleta.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComiteComponent } from './listar-comite/listar-comite.component';

const routes: Routes = [
  {path: 'listaratleta', component: ListarAtletaComponent},
  {path: 'listarcomite', component: ListarComiteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
