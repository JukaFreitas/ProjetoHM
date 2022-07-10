import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Produto } from 'src/app/models/produto';
import { ServprodutosService } from 'src/app/services/servprodutos.service';
import { ServstoreService } from 'src/app/services/servstore.service';

@Component({
  selector: 'app-administradoreditar',
  templateUrl: './administradoreditar.component.html',
  styleUrls: ['./administradoreditar.component.css']
})
export class AdministradoreditarComponent implements OnInit {

  formEditar!: FormGroup;
  produto!: Produto;
  produtoEditar!: Produto;
  listaProdutosDestaque: Produto[] = [];
  destaqueNumMax = 8;
  totalProdutosDestaque!: Number;
  mensagemErro!: String;
  validador!: boolean;
  listaTipo: string[] = [];



  constructor(private router: Router, public modalRef: BsModalRef, private servProdutos: ServprodutosService, private servStore: ServstoreService) { }

  ngOnInit(): void {
    this.tiposProduto();
    this.produto = this.servStore.getCurrentProduto();
    console.log(this.produto);
    this.formEditar = new FormGroup({
      nome: new FormControl(this.produto.nome, [Validators.required, Validators.pattern('[a-zA-Z0-9]{3,40}')]),
      marca: new FormControl(this.produto.marca, [Validators.required, Validators.pattern('[a-zA-Z0-9 ]{3,40}')]),
      tipo_de_produto: new FormControl(this.produto.tipo_de_produto, Validators.required),
      cor: new FormControl(this.produto.cor, Validators.required),
      preco: new FormControl(this.produto.preco, Validators.required),
      descricao: new FormControl(this.produto.descricao, Validators.required),
    });

  }

  alteraProduto() {
    this.produtoEditar = this.formEditar.value;
    this.produtoEditar.id = this.produto.id;
    this.produtoEditar.categoria = this.produto.categoria;
    this.produtoEditar.foto_principal = this.produto.foto_principal;
    this.produtoEditar.foto_secundaria = this.produto.foto_secundaria;
    this.produtoEditar.destaque = this.produto.destaque
    console.log(this.produtoEditar)

    this.servProdutos
    .putProduto(Number(this.produtoEditar.id), this.produtoEditar).subscribe()
    {
      this.router.navigate(['/home']);
    };
  }

  destaqueProdutos() {
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
  }

  tiposProduto() {
    this.servProdutos.getProdutos()
      .subscribe((produtos: Produto[]) => {
        this.listaTipo = produtos.map(p => p.tipo_de_produto)
        this.listaTipo = this.listaTipo.filter(
          (tipo_de_produto, t) => t === this.listaTipo.indexOf(tipo_de_produto));


      })
  };
  // getFormValidationErrors() {
  //   Object.keys(this.formEditar.controls).forEach(key => {
  //     const controlErrors: ValidationErrors = this.formEditar.get(key).errors;
  //     if (controlErrors != null) {
  //       Object.keys(controlErrors).forEach(keyError => {
  //        console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
  //       });
  //     }
  //   });
  // }
}