import { Component, OnInit, enableProdMode } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../../models/produto';
import { ServprodutosService } from '../../services/servprodutos.service';
@Component({
  selector: 'app-paginaprodutos',
  templateUrl: './paginaprodutos.component.html',
  styleUrls: ['./paginaprodutos.component.css']
})
export class PaginaprodutosComponent implements OnInit {

  genero!: string;
  tipoProduto!: string;

  listaCores: string[] = [];
  listatiposProduto: string[] = [];

  listaProdutosGenero: Produto[] = [];
  listaFinal: Produto[] | null = [];

  initialRecord: number = 0;
  numberRecords: number = 6;
  totalRegistos!: number;

  mostraIcon: boolean = false;



  constructor(private router: Router, private rotaActiva: ActivatedRoute, private servProdutos: ServprodutosService) { }

  ngOnInit(): void {



    this.getTiposProdutos();
    this.getProdutoCor();


    this.rotaActiva.paramMap.subscribe(params => {
      this.genero = params.get('genero')!;
    })

    this.rotaActiva.paramMap.subscribe(params => {
      this.tipoProduto = params.get('tipoProduto')!;
    })



    if (this.tipoProduto !== "Todos") {
      this.getProdutosTipo();


    } else {
      this.getProdutosGenero();
    }








    // this.filtraProduto(); 
    //  https://stackoverflow.com/questions/41678356/router-navigate-does-not-call-ngoninit-when-same-page
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };




  };


  getProdutosGenero() {
    if (this.genero) {
      this.servProdutos.getProdutos()
        .subscribe((produtos: Produto[]) => {
          this.listaProdutosGenero = produtos.filter(p => p.categoria === this.genero);
          this.listaFinal = this.listaProdutosGenero
        })
    }
  }

  getProdutosTipo() {

    if (this.genero) {
      this.servProdutos.getProdutos()
        .subscribe((produtos: Produto[]) => {
          this.listaProdutosGenero = produtos.filter(p => p.categoria === this.genero);
          this.listaFinal = this.listaProdutosGenero.filter(p => p.tipo_de_produto === this.tipoProduto)
        })
    }

  }



  getTiposProdutos() {
    this.servProdutos.getProdutos()
      .subscribe((produtos: Produto[]) => {
        this.listatiposProduto = produtos.map(p => p.tipo_de_produto)
        console.log(this.listatiposProduto);
        this.listatiposProduto = this.listatiposProduto.filter(
          (tipo_de_produto, t) => t === this.listatiposProduto.indexOf(tipo_de_produto));
        console.log(this.listatiposProduto);


      })
  }


  getProdutoCor() {
    this.servProdutos.getProdutos()
      .subscribe((produtos: Produto[]) => {
        this.listaCores = produtos.map(p => p.cor)
        this.listaCores = this.listaCores.filter(
          (cor, c) => c === this.listaCores.indexOf(cor)
        );


      })
  }

  getProdutosFiltrados(tipoCor:any) {

    this.servProdutos.getProdutos()
      .subscribe((produtos: Produto[]) => {
        this.listaFinal = produtos;
      })


    if (this.genero && this.genero.length > 0) {
      this.listaFinal = (this.listaFinal?.filter(p => p.categoria === this.genero)!);
    }

    if (this.tipoProduto && this.tipoProduto.length > 0) {
      this.listaFinal = (this.listaFinal?.filter(p => p.tipo_de_produto === this.tipoProduto)!);
    }
    this.listaFinal = (this.listaFinal?.filter(p => p.tipo_de_produto === tipoCor)!);
    this.listaFinal = (this.listaFinal?.filter(p => p.cor === tipoCor)!)


  }

  getProdutoByTipo(tipo: any) {
    this.listaFinal = this.listaProdutosGenero.filter(p => p.tipo_de_produto === tipo)
    console.log(this.listaFinal, tipo)

  }

  getProdutoByCor(cor: any) {

    
          this.listaFinal = this.listaProdutosGenero.filter(p => p.cor === cor)!
      
  }


  readPagePosts(iniRec: number, numRec: number) {


    this.servProdutos.getProdutosPage(iniRec, numRec).subscribe({
      next: (response) => {

        this.listaFinal = response.body;
        console.log(this.listaFinal)
        this.totalRegistos = Number(response.headers.get("X-Total-Count"));
        // console.log(response.headers.get("X-Total-Count"));
        console.log(this.listaFinal);
      }
    });


  }
  next6() {
    this.initialRecord += 6;
    this.readPagePosts(this.initialRecord, this.numberRecords);
  }



}

