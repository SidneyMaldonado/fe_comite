import { ListarAtletaComponent } from './listar-atleta/listar-atleta.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComiteComponent } from './listar-comite/listar-comite.component';
import { ListarProvinciaComponent } from './listar-provincia/listar-provincia.component';
import { ListarCidadeComponent } from './listar-cidade/listar-cidade.component';
import { ListarSetorComponent } from './listar-setor/listar-setor.component';
import { ListarEventoComponent } from './listar-evento/listar-evento.component';
import { ListarModalidadeComponent } from './listar-modalidade/listar-modalidade.component';
import { ListarConfederacaoComponent } from './listar-confederacao/listar-confederacao.component';


const routes: Routes = [
  {path: 'listaratleta', component: ListarAtletaComponent},
  {path: 'listarcomite', component: ListarComiteComponent},
  {path: 'listarprovincia', component: ListarProvinciaComponent},
  {path: 'listarcidade', component: ListarCidadeComponent},
  {path: 'listarsetor', component: ListarSetorComponent },
  {path: 'listarevento', component: ListarEventoComponent},
  {path: 'listarmodalidade', component: ListarModalidadeComponent},
  {path: 'listarconfederacao', component: ListarConfederacaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
