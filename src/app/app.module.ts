import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarPessoaComponent } from './listar-pessoa/listar-pessoa.component';
import { ListarAtletaComponent } from './listar-atleta/listar-atleta.component';
import { ListarSetorComponent } from './listar-setor/listar-setor.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarPessoaComponent,
    ListarAtletaComponent,
    ListarSetorComponent
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
