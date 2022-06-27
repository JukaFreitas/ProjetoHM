import { Component, Input, OnInit } from '@angular/core';
import { ServprodutosService } from 'src/app/services/servprodutos.service';
import { Produto } from '../../models/produto';

@Component({
  selector: 'app-destaques',
  templateUrl: './destaques.component.html',
  styleUrls: ['./destaques.component.css']
})
export class DestaquesComponent implements OnInit {

  listaProdutosDestaque: Produto[] = [];


 
  constructor(private servProdutos: ServprodutosService) { }

  ngOnInit(): void {
    this.getProdutosDestaque();
  }

  getProdutosDestaque() {
    this.servProdutos.getProdutos()
     .subscribe((produtos: Produto[]) => {this.listaProdutosDestaque = 
       produtos.filter(produtos=>produtos.destaque===true)
       console.log(this.listaProdutosDestaque);

     });

}
}
