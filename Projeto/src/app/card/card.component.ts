import { Component, Input, OnInit } from '@angular/core';
import { faStar as faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { User } from '../models/user';
import { ServstoreService } from '../services/servstore.service';
import { ServusersService } from '../services/servusers.service';
import { icon } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() dados: any;
  faStar = faStar;
  faStarSolid = faStarSolid;
  toggle: boolean = false;
  user!: User;
  faIcon : any;

  constructor(private servStore: ServstoreService, private servUsers: ServusersService) { }

  ngOnInit(): void {

    this.user = this.servStore.getCurrentUser();

    if (this.user && this.user.wishlist?.includes(this.dados.id)) {
      this.faIcon = this.faStarSolid;
    }else{
      this.faIcon = this.faStar; 
    }

  }

  addWishlist() {

    if (this.user) {
      if (this.faIcon === this.faStarSolid) {
        const index =  this.user.wishlist?.indexOf(this.dados.id)
        if(index !==-1){
          this.user.wishlist?.splice(Number(index), 1);  

          console.log(this.user); 
          this.faIcon= this.faStar;     
        }

      } else {
        this.faIcon = this.faStarSolid
        if (!this.user.wishlist) {
          this.user.wishlist = [];
        }
        console.log(this.dados.id)
        this.user.wishlist.push(this.dados.id);
        console.log(this.user);
        // this.servUsers.putUser(Number(this.user.id), this.user).subscribe((utilizador: User) => {

        //   this.user.wishlist = utilizador.wishlist;
        // });

      }
      this.servUsers.putUser(Number(this.user.id), this.user).subscribe((utilizador: User) => {
        this.user.wishlist = utilizador.wishlist;
      });
    }
  }


}

