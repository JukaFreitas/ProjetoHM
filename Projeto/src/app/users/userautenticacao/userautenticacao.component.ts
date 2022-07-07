import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { User } from 'src/app/models/user';
import { ServusersService } from 'src/app/services/servusers.service';
import { ServstoreService } from '../../services/servstore.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userautenticacao',
  templateUrl: './userautenticacao.component.html',
  styleUrls: ['./userautenticacao.component.css']
})
export class UserautenticacaoComponent implements OnInit {
  formLogin!: FormGroup;
  private listaUsers?: User[];
  mensagemErro!: string;

  constructor( private servStore: ServstoreService, public modalRef: BsModalRef, private servUsers: ServusersService) {

  }


  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required,
      Validators.pattern('[A-Za-zÀ-ÿ]{1,}[@][A-Za-zÀ-ÿ]{1,}[.][A-Za-zÀ-ÿ]{2,}')]),
      senha: new FormControl('', Validators.required)
    });


  }
  userLogin() {

    const userAutenticacao: User = this.formLogin.value;

    this.servUsers.getUsers().subscribe((users: User[]) => {
      this.listaUsers = users;
      console.log(this.listaUsers);


      console.log(this.listaUsers);
      console.log(userAutenticacao);



      const user = this.listaUsers?.find(user => user.email === userAutenticacao.email
        && user.senha === userAutenticacao.senha);


      console.log(user);

      if (user) {
        this.servStore.setCurrentUser(user);
        console.log(user)

        console.log(this.servStore.getCurrentUser());
              this.modalRef.hide();


      }
      else {
        this.mensagemErro = "Email ou senha incorrecta"

      }

      this.formLogin.reset();




    });


  }


  get email() {
    return this.formLogin.get('email')!;
  }

  get senha() {
    return this.formLogin.get('senha')!;
  }
}

