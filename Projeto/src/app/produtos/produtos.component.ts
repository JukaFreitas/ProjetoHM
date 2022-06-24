import { compileNgModuleDeclarationExpression } from '@angular/compiler/src/render3/r3_module_compiler';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/produto';
import { ServprodutosService } from '../services/servprodutos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  listaProdutos: Produto[] = [];
  listaProdutosDestaque: Produto[] = [];


  constructor(private servProdutos: ServprodutosService) { }


  ngOnInit(): void {

    this.leProdutos();
    this.getProdutosDestaque();


  }


  leProdutos() {
    this.servProdutos.getProdutos().
      subscribe((produtos: Produto[]) => {
        this.listaProdutos = produtos;


        // console.log(this.listaProdutos)
      });
  };

  getProdutosDestaque() {
     this.servProdutos.getProdutos()
      .subscribe((produtos: Produto[]) => {this.listaProdutosDestaque = 
        produtos.filter(produtos=>produtos.destaque===true)
        console.log(this.listaProdutosDestaque)
        
      });
  };


}
