import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarPessoaComponent } from './listar-pessoa/listar-pessoa.component';
import { ListarAtletaComponent } from './listar-atleta/listar-atleta.component';

import { ListarProvinciaComponent } from './listar-provincia/listar-provincia.component';

import { ListarComiteComponent } from './listar-comite/listar-comite.component';



import { ListarSetorComponent } from './listar-setor/listar-setor.component';
import { ListarEventoComponent } from './listar-evento/listar-evento.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarPessoaComponent,
    ListarAtletaComponent,

    ListarProvinciaComponent,

    ListarComiteComponent,

    ListarSetorComponent,
    ListarEventoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
