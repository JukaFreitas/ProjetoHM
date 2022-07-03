import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Produto } from '../../models/produto';
import { ServprodutosService } from '../../services/servprodutos.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
  listaProdutos: Produto[] = [];
  formProdutos!: FormGroup;

  listaTipo: any;
  constructor(private servProdutos: ServprodutosService) { }

  ngOnInit(): void {

    this.formProdutos = new FormGroup({
      produto: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]{3,40}')]),
      marca: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]{3,40}')]),
      tipo: new FormControl('', Validators.required),
      cor: new FormControl('', Validators.required),
      preco: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required)

    });
    this.allProdutos();
  }


  inserirProduto() {
    let produto: Produto = this.formProdutos.value;
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


  // getTiposProdutos() {
  //   this.servTipoProduto.getTiposProduto().subscribe({
  //     next: (produtosTipos: Tipoproduto[]) => {
  //       this.tiposProdutos = produtosTipos.filter(p => !p.tipo.includes!("Todos"));
  //       this.listaTipo = this.tiposProdutos.map(p => p.tipo);
  //       console.log(this.tiposProdutos)
  //     }
  //   });
  // }

  get produto() {
    // return this.formLivros.get("titulo")!;
    return this.formProdutos.controls["produto"]!;
  }

}


//   leLivros() {
//     this.servlivros.getLivros().subscribe({
//       next: (livros : Livro[]) => {
//         console.log(livros);
//         this.listaLivros=livros;
//       }
//     });
//   }

//   mostraLivro(id : number) {
//     this.servlivros.getLivro(id).subscribe(
//       (livro : Livro) => {
//         console.log(livro);
//         alert(livro.titulo);
//       }
//     )
//   }

//   inserirLivro() {
//     // let livro : Livro = {
//     //   titulo: "Queen Mary",
//     //   editora : "Penguin Books",
//     //   ano_publicacao: 1952,
//     //   autor: "Winston Churchill",
//     //   tipo: "Biografia"
//     // }
//     let livro : Livro = this.formLivros.value;
//     this.servlivros.postLivro(livro).subscribe(
//       (livro : Livro) => {
//         console.log(livro);
//         this.leLivros();
//         this.formLivros.reset();
//       }
//     )

//     this.store.setMensagem("Livro criado");

//   }

//   get titulo() {
//     // return this.formLivros.controls["titulo"]!;
//     return this.formLivros.get("titulo")!;
//   }
//   eliminaLivro(id : number, evento : any) {
//     evento.stopPropagation();
//     if (confirm("Confirma a eliminação do livro?")) {
//       this.servlivros.deleteLivro(id).subscribe({
//         next: (info : any) => {
//           console.log(info);
//           alert(`Foi eliminado o livro com o id: ${id}`);
//           this.leLivros();
//         },
//         error: (error) => {
//           console.log("Ocorreu um erro: "+error);
//         }
//       });
//     }
//   }

// }

