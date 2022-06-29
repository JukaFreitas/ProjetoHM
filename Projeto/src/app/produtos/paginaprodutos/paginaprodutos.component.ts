import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tipoproduto } from '../../models/tipoproduto';
import { Produto } from '../../models/produto';
import { ServprodutosService } from '../../services/servprodutos.service';
import { filter } from 'rxjs';
import { ServtiposprodutosService } from '../../services/servtiposprodutos.service';

@Component({
  selector: 'app-paginaprodutos',
  templateUrl: './paginaprodutos.component.html',
  styleUrls: ['./paginaprodutos.component.css']
})
export class PaginaprodutosComponent implements OnInit {
 genero! : string;
 tipoProduto! : string; 
 listaProdutosGenero :Produto[] = [];
 listaTiposProduto : Tipoproduto[] = [];
 idTipoProduto!: number; 
 
  constructor(private router : Router, private rotaActiva: ActivatedRoute, private servProdutos : ServprodutosService, private servTipoProduto : ServtiposprodutosService ){ }

  ngOnInit(): void {
   this.getProdutosGenero();
  //  this.getTipoProduto(this.listaProdutosGenero);
  this.filtraProduto(); 
  //  https://stackoverflow.com/questions/41678356/router-navigate-does-not-call-ngoninit-when-same-page
   this.router.routeReuseStrategy.shouldReuseRoute = function() {
    return false;
};
    

  };

  getProdutosGenero(){
    this.rotaActiva.paramMap.subscribe(params => { 
      this.genero = params.get('genero')!; 
      console.log(this.genero)
    })
    if(this.genero){
      console.log(this.genero)
      this.servProdutos.getProdutos()
      .subscribe((produtos :Produto[])=>{
        this.listaProdutosGenero = produtos.filter(p=>p.categoria===this.genero);  

        console.log(this.listaProdutosGenero)


      })
    }
  }

  getTipoProduto(lista : Produto[]){
    this.rotaActiva.paramMap.subscribe(params => { 
      this.tipoProduto = params.get('tipoProduto')!; 
      console.log(this.tipoProduto)
      this.servTipoProduto.getTiposProduto().subscribe((tiposProduto : Tipoproduto[])=>{
        this.listaTiposProduto = tiposProduto.filter(tp=>tp.tipo === this.tipoProduto)
        

        console.log(this.listaTiposProduto);

      })
    })
  }

    filtraProduto(){
      this.rotaActiva.paramMap.subscribe(params => { 
        this.tipoProduto = params.get('tipoProduto')!; 
        console.log(this.tipoProduto)

       console.log( this.servTipoProduto.filtraTipoProduto(this.tipoProduto).subscribe())


      })


    }


  
}
