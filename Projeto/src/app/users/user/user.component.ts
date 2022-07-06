import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { User } from 'src/app/models/user';
import { ServusersService } from 'src/app/services/servusers.service';
import { UserautenticacaoComponent } from '../userautenticacao/userautenticacao.component';
import { ServstoreService } from '../../services/servstore.service';
import { UsereditarComponent } from '../usereditar/usereditar.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  listaUsers: User[] = [];
  dadosUser!:User; 
  user!: User; 
  modalRef?: BsModalRef;

 
  constructor(private modalService: BsModalService,private servStore: ServstoreService) { }

  ngOnInit(): void {

    this.user= this.servStore.getCurrentUser(); 
    this.dadosUser = this.user; 
  }

  alterarDados(){
    this.modalRef = this.modalService.show(UsereditarComponent)


  }



}