import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faFacebook, faInstagram, faPinterest, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faArrowAltCircleRight, faClipboardList, faUserEdit, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { subMenuAcessorios } from 'src/app/models/menus/subMenuAcessorios';
import { subMenuCrianca } from 'src/app/models/menus/subMenuCrianca';
import { subMenuHomem } from 'src/app/models/menus/subMenuHomem';
import { subMenuMulher } from 'src/app/models/menus/subMenuMulher';
import { UserautenticacaoComponent } from 'src/app/users/userautenticacao/userautenticacao.component';
import { ServstoreService } from './services/servstore.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projetoHM';

  opcoesMenuHomem: string[] = subMenuHomem;
  opcoesMenuMulher: string[] = subMenuMulher;
  opcoesMenuCrianca: string[] = subMenuCrianca;
  opcoesMenuAcessorios: string[] = subMenuAcessorios;
  mulher: string = "Mulher";
  homem: string = "Homem";
  crianca: string = "Criança"
  acessorios: string = "Acessórios";

  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faYoutube = faYoutube;
  faPinterest = faPinterest;

  faWishlist = faClipboardList;
  faLog = faArrowAltCircleRight;
  faRegisto = faUserPlus;
  faPerfil = faUserEdit;

  modalRef?: BsModalRef;
  mostraME?: boolean;
  show: boolean = true;
  constructor(private router: Router, private rotaActiva: ActivatedRoute,private servStore: ServstoreService, private modalService: BsModalService) { }

  ngOnInit() {
    
    const user = this.servStore.getCurrentUser();
    console.log(user);
    if (user) {
      this.mostraME = true;
      this.show = false;
      console.log(user); 


    }

  }
  

  openModalLogin() {
    this.modalRef = this.modalService.show(UserautenticacaoComponent)

  }



}



