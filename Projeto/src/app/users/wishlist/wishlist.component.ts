import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ServstoreService } from 'src/app/services/servstore.service';
import { subMenuAcessorios } from '../../models/menus/subMenuAcessorios';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  listaWishlist!: Array<number>;
  user!: User;
  mensagem!: String;
  constructor(private servStore: ServstoreService) { }
  ngOnInit(): void {
    this.user = this.servStore.getCurrentUser();
    if (this.user) {
      if (this.user.wishlist) {
        this.listaWishlist = this.user.wishlist;
      } else {
        this.mensagem = "Não tem produtos na Wishlist"

      }
      console.log(this.listaWishlist)
    }

  }


}
