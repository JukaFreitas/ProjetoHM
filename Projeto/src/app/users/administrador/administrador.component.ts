import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ServstoreService } from 'src/app/services/servstore.service';
import { Produto } from '../../models/produto';
import { ServprodutosService } from '../../services/servprodutos.service';
import { AdministradoreditarComponent } from '../administradoreditar/administradoreditar.component';
import { faCheck } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
  listaProdutos: Produto[] = [];
  formProdutos!: FormGroup;
  listaTipo: string[] = [];
  listaProdutosDestaque: Produto[] = [];
  destaqueNumMax = 8;
  totalProdutosDestaque!: Number;
  mensagemErro!: String;
  validador!: boolean;
  modalRef?: BsModalRef;
  faCerto = faCheck;
  // faX = "X"; 
  destaqueBool!: boolean;


  constructor(private modalService: BsModalService, private servProdutos: ServprodutosService, private servStore: ServstoreService) { }

  ngOnInit(): void {



    this.formProdutos = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9]{3,40}')]),
      marca: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]{3,40}')]),
      tipo_de_produto: new FormControl('', Validators.required),
      cor: new FormControl('', Validators.required),
      preco: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required),
      destaque: new FormControl('')



    });
    this.allProdutos();
    this.tiposProduto();









  }


  inserirProduto() {
    let produto: Produto = this.formProdutos.value;
    if (produto.destaque === true) {
      this.destaqueProdutos();
      console.log(this.validador)
      if (this.validador === false) {

        this.mensagemErro = "Só poderá inserir oito produtos em destaque."
      }

    }
    produto.foto_principal = "";
    produto.foto_secundaria = "";
    console.log(produto);
    this.servProdutos.postProduto(produto).subscribe(
      (produto: Produto) => {
        this.allProdutos();
        this.formProdutos.reset();
      })

  }

  allProdutos() {
    this.servProdutos.getProdutos().subscribe(
      (produtos: Produto[]) => {
        this.listaProdutos = produtos;
      }
    )

  }


  get nome() {
    return this.formProdutos.controls["nome"]!;
  }
  get destaque() {
    // return this.formLivros.get("titulo")!;
    return this.formProdutos.controls["destaque"]!;
  }

  pesquisaProduto(pesquisa: string) {
    pesquisa = pesquisa.toUpperCase();
    this.servProdutos.getProdutos().subscribe(
      (produtos: Produto[]) => {
        this.listaProdutos = produtos.filter(p => p.nome.toUpperCase().includes(pesquisa));
        console.log(this.listaProdutos, pesquisa)
      }
    )


  }

  clearPesquisa() {

    this.allProdutos();
  }

  eliminaProduto(id: number) {

    this.servProdutos.deleteProduto(id)
      .subscribe((produto: Produto) => {
        alert("O produto foi eliminado")

      });

  }

  alteraProduto(produto: Produto) {
    this.servStore.setCurrentProduto(produto);
    this.modalRef = this.modalService.show(AdministradoreditarComponent)
  }

  tiposProduto() {
    this.servProdutos.getProdutos()
      .subscribe((produtos: Produto[]) => {
        this.listaTipo = produtos.map(p => p.tipo_de_produto)
        this.listaTipo = this.listaTipo.filter(
          (tipo_de_produto, t) => t === this.listaTipo.indexOf(tipo_de_produto));


      })
  };

  async destaqueProdutos() {
    this.servProdutos.getProdutos()
      .subscribe((produtos: Produto[]) => {
        this.listaProdutosDestaque = produtos.filter(produtos => produtos.destaque === true);
        this.totalProdutosDestaque = this.listaProdutosDestaque.length;
        if (this.totalProdutosDestaque >= this.destaqueNumMax) {
          console.log(this.totalProdutosDestaque, this.destaqueNumMax)
          this.validador = false;
        } else {
          this.validador = true;

        }

      });



  };
  removerDestaque(produto: Produto) {
    produto.destaque = false;
    this.servProdutos
      .putProduto(Number(produto.id), produto).subscribe((produto: Produto) => {
        produto = produto;
      });



  }

  adicionarDestaque(produto: Produto) {
    this.servProdutos.getProdutos()
      .subscribe((produtos: Produto[]) => {
        this.listaProdutosDestaque = produtos.filter(produtos => produtos.destaque === true);
        this.totalProdutosDestaque = this.listaProdutosDestaque.length;
        if (this.totalProdutosDestaque >= this.destaqueNumMax) {
          alert("Não pode adicionar mais produtos em destaque")
        } else {
          produto.destaque = true;
          this.servProdutos
            .putProduto(Number(produto.id), produto).subscribe((produto: Produto) => {
              produto = produto;
            });

        }

      } )
  };
}






