import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarPessoaComponent } from './listar-pessoa/listar-pessoa.component';
import { ListarAtletaComponent } from './listar-atleta/listar-atleta.component';
import { ListarComiteComponent } from './listar-comite/listar-comite.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarPessoaComponent,
    ListarAtletaComponent,
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
