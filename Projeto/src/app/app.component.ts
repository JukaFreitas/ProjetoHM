import { Component } from '@angular/core';
import { faFacebook, faInstagram, faPinterest, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faArrowAltCircleRight, faClipboardList, faUserEdit, faUserPlus, faCheck, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
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

  faAdmin = faCheck;

  faWishlist = faClipboardList;
  faLogin = faArrowAltCircleRight;
  faRegisto = faUserPlus;
  faPerfil = faUserEdit;
  faLogout = faArrowCircleLeft;


  modalRef?: BsModalRef;
  userComLogin?: boolean;
  show: boolean = true;
  mensagemUser!: string;
  acessoAdmin: boolean = false;
  userNome!: any;

  constructor(private servStore: ServstoreService, private modalService: BsModalService) {
    this.servStore.userComlogin.subscribe((value) => {
      this.userComLogin = value;
    });

    this.servStore.userName.subscribe(value => this.userNome = value)
  }

  ngOnInit() {
    const user = this.servStore.getCurrentUser();
    console.log(user);
    console.log(this.userNome)
 

  }


  openModalLogin() {
    this.modalRef = this.modalService.show(UserautenticacaoComponent)

  }


  estadoLogin() {
    const user = this.servStore.getCurrentUser();
    console.log(user)


  }

  logOut() {
    this.servStore.removerCurrentUser();
  }


}



