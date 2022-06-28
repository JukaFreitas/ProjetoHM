import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/models/produto';
import { ServprodutosService } from '../../services/servprodutos.service';
import { Tipoproduto } from '../../models/tipoproduto';
import { ServtiposprodutosService } from '../../services/servtiposprodutos.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

id! : number;
produto! : Produto;
idTipoProduto! : number;
tipoProduto: string=""; 
  constructor(private servTipoProduto :ServtiposprodutosService  ,private rotaActiva: ActivatedRoute, private servProdutdos: ServprodutosService) { }

  ngOnInit(): void {
    
     // testar a existência do parâmetro com o método has()
     this.rotaActiva.paramMap.subscribe(params => { 
      // console.log(params);
       this.id = Number (params.get('id')); 
     })
     // quando o id não é numérico, o valor retornado é NaN (Not a Number)
     // console.log(typeof this.id); // number se id=NaN
     if (!isNaN(this.id)) {
    // console.log( this.servProdutdos.getProduto(this.id).subscribe(produto=> produto.id === this.id))
   this.servProdutdos.getProduto(this.id).subscribe((prod : Produto)=>{
   this.produto = prod; 
   this.idTipoProduto = Number(this.produto.tipoProdId);
   console.log(this.produto)
   console.log(this.idTipoProduto)

   this.getTipoPro(this.idTipoProduto);
   
   })

   
    
     }
     
  }

  getTipoPro(idTipoProduto:number){
    
    this.servTipoProduto.getTipoProduto(idTipoProduto).subscribe((tipoProd: Tipoproduto)=>{
      this.tipoProduto = tipoProd.tipo;
      console.log(this.tipoProduto);

    })

  }

}
