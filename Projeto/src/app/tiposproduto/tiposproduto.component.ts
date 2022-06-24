import { Component, OnInit } from '@angular/core';
import { Tipoproduto } from '../models/tipoproduto';
import { ServtiposprodutosService } from '../services/servtiposprodutos.service';

@Component({
  selector: 'app-tiposproduto',
  templateUrl: './tiposproduto.component.html',
  styleUrls: ['./tiposproduto.component.css']
})
export class TiposprodutoComponent implements OnInit {

  listaTiposProduto : Tipoproduto[]=[]; 

  constructor(private servTiposProd : ServtiposprodutosService) { }

  ngOnInit(): void {
  }

}
