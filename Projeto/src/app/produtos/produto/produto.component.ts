import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/models/produto';
import { ServprodutosService } from '../../services/servprodutos.service';
import { ServstoreService } from '../../services/servstore.service';
@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

id! : number;
produto! : Produto;
  constructor(private servStore: ServstoreService, private rotaActiva: ActivatedRoute, private servProdutos: ServprodutosService) { }

  ngOnInit(): void {
    
     this.rotaActiva.paramMap.subscribe(params => { 
       this.id = Number (params.get('id')); 
     })
     
     if (!isNaN(this.id)) {
   this.servProdutos.getProduto(this.id).subscribe((produto : Produto)=>{
   this.produto = produto;
   console.log(this.servStore.getCurrentUser());

   
   
   
   })

   
    
     }
     
  }



}
