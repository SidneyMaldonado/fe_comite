import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarPessoaComponent } from './listar-pessoa/listar-pessoa.component';
import { ListarAtletaComponent } from './listar-atleta/listar-atleta.component';
<<<<<<< HEAD
import { ListarComiteComponent } from './listar-comite/listar-comite.component';

=======
import { ListarSetorComponent } from './listar-setor/listar-setor.component';
import { ListarEventoComponent } from './listar-evento/listar-evento.component';
>>>>>>> 8d8ae4f27ccec84251e8aef5f7e77ae93438972b
@NgModule({
  declarations: [
    AppComponent,
    ListarPessoaComponent,
    ListarAtletaComponent,
<<<<<<< HEAD
    ListarComiteComponent
=======
    ListarSetorComponent,
    ListarEventoComponent
>>>>>>> 8d8ae4f27ccec84251e8aef5f7e77ae93438972b
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
