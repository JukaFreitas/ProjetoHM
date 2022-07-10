import { Component, Input, OnInit } from '@angular/core';
import { ServprodutosService } from '../../services/servprodutos.service';
import { Produto } from '../../models/produto';
import { ServstoreService } from '../../services/servstore.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-cardwishlist',
  templateUrl: './cardwishlist.component.html',
  styleUrls: ['./cardwishlist.component.css']
})
export class CardwishlistComponent implements OnInit {
  @Input() data: any;
  user!: User;

  constructor(private servProduto: ServprodutosService, private servStore: ServstoreService) { }

  ngOnInit(): void {
    this.user = this.servStore.getCurrentUser();
    console.log(this.data);
    this.getProduto();

  }

  getProduto() {

    this.servProduto.getProduto(this.data)
      .subscribe((produto: Produto) => {
        this.data = produto;
        console.log(produto)
      })

  }
  removerWishlist() {
    if (this.user) {
      const index = this.user.wishlist?.indexOf(this.data.id)
      if (index !== -1) {
        this.user.wishlist?.splice(Number(index), 1);

        console.log(this.user);


      }
    }
  }

}
