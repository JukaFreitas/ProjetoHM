import { Component, OnInit, enableProdMode } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tipoproduto } from '../../models/tipoproduto';
import { Produto } from '../../models/produto';
import { ServprodutosService } from '../../services/servprodutos.service';
import { filter } from 'rxjs';
import { ServtiposprodutosService } from '../../services/servtiposprodutos.service';
import { Card } from 'src/app/models/cardType';
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
  tiposProduto: Tipoproduto[] = [];

  idTipoProduto!: number;
  listaCores: string[] = [];

  listaFinal: Produto[] | null= [];

  listaProdutosMostrar : Produto[] | null= [];

  initialRecord : number = 0;
  numberRecords : number = 6;
  totalRegistos! : number;




  constructor(private router: Router, private rotaActiva: ActivatedRoute, private servProdutos: ServprodutosService, private servTipoProduto: ServtiposprodutosService) { }

  ngOnInit(): void {

    this.readPagePosts(this.initialRecord,this.numberRecords);

    this.getProdutosGenero();
    this.getIdTipoProduto();
    this.getTiposProdutos();
    this.getProtudoCor();


    // this.filtraProduto(); 
    //  https://stackoverflow.com/questions/41678356/router-navigate-does-not-call-ngoninit-when-same-page
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };




  };


  getProdutosGenero() {
    this.rotaActiva.paramMap.subscribe(params => {
      this.genero = params.get('genero')!;
    })
    if (this.genero) {
      this.servProdutos.getProdutos()
        .subscribe((produtos: Produto[]) => {
          this.listaProdutosGenero = produtos.filter(p => p.categoria === this.genero);
        })
    }
  }

  getIdTipoProduto() {
    this.rotaActiva.paramMap.subscribe(params => {
      this.tipoProduto = params.get('tipoProduto')!;
    });

    if (this.tipoProduto.includes("Todos")) {
      this.rotaActiva.paramMap.subscribe(params => {
        this.genero = params.get('genero')!;
        this.servProdutos.getProdutos()
          .subscribe((produtos: Produto[]) => {
            this.listaFinal = this.listaProdutosGenero =
              produtos.filter(p => p.categoria === this.genero);



          })
      })

    } else {
      this.servTipoProduto.getTiposProduto()
        .subscribe((tiposProduto: Tipoproduto[]) => {
          this.listaTiposProduto =
            tiposProduto.filter(tp => tp.tipo === this.tipoProduto)
          const produtoTipo =
            this.listaTiposProduto.find(tp => tp)
          this.idTipoProduto = Number(produtoTipo?.id)
          this.listaFinal =
            this.listaProdutosGenero.
              filter(pg => pg.tipoProdId === this.idTipoProduto)
        });

    }
  };


  getTiposProdutos() {
    this.servTipoProduto.getTiposProduto().subscribe({
      next: (produtosTipos: Tipoproduto[]) => {
        this.tiposProduto = produtosTipos.filter(p=>!p.tipo.includes!("Todos"));

        console.log(this.tiposProduto)
      }
    });
  }

  getProtudoCor() {
    this.servProdutos.getProdutos()
      .subscribe((produtos: Produto[]) => {
        this.listaCores = produtos.map(p=>p.cor)
        this.listaCores = this.listaCores.filter(
          (cor, c) => c === this.listaCores.indexOf(cor)
        );

        console.log(this.listaCores)

      })
  }

  readPagePosts(iniRec : number, numRec : number) {

    console.log(iniRec)
    this.servProdutos.getProdutosPage(iniRec,numRec).subscribe({
      next: (response) => {
        this.listaFinal=response.body;
        console.log(this.listaFinal)
        this.totalRegistos=Number(response.headers.get("X-Total-Count"));
        // console.log(response.headers.get("X-Total-Count"));
        console.log(this.listaFinal);
      }
    });
  }
  next10() {
    this.initialRecord+=6;
    this.readPagePosts(this.initialRecord,this.numberRecords);
  }

}

