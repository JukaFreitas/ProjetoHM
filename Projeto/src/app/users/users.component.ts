import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { ServusersService } from '../services/servusers.service';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { UserautenticacaoComponent } from './userautenticacao/userautenticacao.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  listaUsers: User[] = [];

  modalRef?: BsModalRef;

  faWishlist = faClipboardList;
  faLogin = faUser;
  faLogout = faArrowAltCircleRight;
  faRegisto = faUserPlus;
  faPerfil = faUserEdit;

  mostraME? : boolean; 
  
 

  constructor(private servUsers: ServusersService, 
    private modalService: BsModalService) { }

  ngOnInit(): void {
    
  }

  leUsers() {
    this.servUsers.getUsers().subscribe((users: User[]) => {
      console.log(users)
    }
    );


  }

  //  openModalLogin(){
  //   this.modalRef = this.modalService.show(UserautenticacaoComponent,{
  //   initialState:{
  //     title: 'Login'
  //    }
  //   });
  

  openModalLogin(){
    this.modalRef=this.modalService.show(UserautenticacaoComponent)
  }


}


// openModalWithComponent(){
    //   const initialState: ModalOptions = {
    //     initialState: {
    //       list: [
    //         'Open a modal with component',
    //         'Pass your data',
    //         'Do something else',
    //         '...'
    //       ],
    //       title: 'Modal with component'
    //     }
    //   };
    //   this.bsModalRef = this.modalService.show(ModalContentComponent, initialState);
    //   this.bsModalRef.content.closeBtnName = 'Close';
    // }





  // get email(){
  //  return 
  // }

