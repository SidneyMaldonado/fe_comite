import { Atleta } from './../entities/atleta';
import { AtletaService } from './../atleta.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-atleta',
  templateUrl: './listar-atleta.component.html',
  styleUrls: ['./listar-atleta.component.css']
})
export class ListarAtletaComponent implements OnInit {

  atletas: Atleta[] = [];

  constructor( private servicoAtleta: AtletaService ) { }

  ngOnInit(): void {

    this.servicoAtleta.listar().subscribe(
      data => { this.atletas = data},
      error => console.log("Erro ao listar atleta", error)
    )

  }

}
