import { ListarAtletaComponent } from './listar-atleta/listar-atleta.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarSetorComponent } from './listar-setor/listar-setor.component';

const routes: Routes = [
  {path: 'listaratleta', component: ListarAtletaComponent },
  {path: 'listarsetor', component: ListarSetorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
