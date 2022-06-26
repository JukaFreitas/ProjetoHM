import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { ServprodutosService } from 'src/app/services/servprodutos.service';

@Component({
  selector: 'app-produtosgeral',
  templateUrl: './produtosgeral.component.html',
  styleUrls: ['./produtosgeral.component.css']
})
export class ProdutosgeralComponent implements OnInit {
  listaProdutos: Produto[] = [];
  listaProdutosDestaque: Produto[] = [];


  constructor(private servProdutos: ServprodutosService) { }

  ngOnInit(): void {
    // this.leProdutos();
    // this.getProdutosDestaque();
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
