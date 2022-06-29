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
  genero!: string;
  tipoProduto!: string;
  listaProdutosGenero: Produto[] = [];
  listaTiposProduto: Tipoproduto[] = [];
  idTipoProduto!: number;

  listaFinal : Produto[] =[]

  constructor(private router: Router, private rotaActiva: ActivatedRoute, private servProdutos: ServprodutosService, private servTipoProduto: ServtiposprodutosService) { }

  ngOnInit(): void {
    this.rotaActiva.paramMap.subscribe(params => {
      this.genero = params.get('genero')!
    })
    if(this.genero==="Todos"){



    }

    this.getProdutosGenero();
    this.getIdTipoProduto();
    // this.filtraProduto(); 
    //  https://stackoverflow.com/questions/41678356/router-navigate-does-not-call-ngoninit-when-same-page
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };


  };


  getProdutosGenero() {
      console.log(this.genero)
      this.servProdutos.getProdutos()
        .subscribe((produtos: Produto[]) => {
          this.listaProdutosGenero = produtos.filter(p => p.categoria === this.genero);

          // console.log(this.listaProdutosGenero)


        })
    }


  getIdTipoProduto() {
    this.rotaActiva.paramMap.subscribe(params => {
      this.tipoProduto = params.get('tipoProduto')!;
      console.log(this.tipoProduto)
      this.servTipoProduto.getTiposProduto().subscribe((tiposProduto: Tipoproduto[]) => {
        this.listaTiposProduto = tiposProduto.filter(tp => tp.tipo === this.tipoProduto)
        const produtoTipo = this.listaTiposProduto.find(tp => tp)
        this.idTipoProduto = Number(produtoTipo?.id)
        console.log(this.idTipoProduto)

        this.listaFinal= this.listaProdutosGenero.filter(pg=> pg.tipoProdId === this.idTipoProduto)
        console.log(this.listaFinal);

      })
    })
  }

  filtraProduto() {
    this.rotaActiva.paramMap.subscribe(params => {
      this.tipoProduto = params.get('tipoProduto')!;
      console.log(this.tipoProduto)

      this.servTipoProduto
        .filtraTipoProduto(this.tipoProduto).subscribe((tp: Tipoproduto) => {
          console.log(tp)

          console.log(this.listaTiposProduto?.find(user => user.tipo === this.tipoProduto));
        })


    })


  }

}
