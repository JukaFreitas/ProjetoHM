import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { User } from 'src/app/models/user';
import { ServusersService } from 'src/app/services/servusers.service';

@Component({
  selector: 'app-userautenticacao',
  templateUrl: './userautenticacao.component.html',
  styleUrls: ['./userautenticacao.component.css']
})
export class UserautenticacaoComponent implements OnInit {

  formLogin!: FormGroup;
  private listaUsers?: User[];

  constructor(public modalRef: BsModalRef, private servUsers: ServusersService) { }




  ngOnInit(): void {
    // this.formLogin = this.formG.group({
    //   email: [],
    //   senha: []

    // });

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
    })
    const user = this.listaUsers?.find(user => user.email === userAutenticacao.email
      && user.senha === userAutenticacao.senha);
      

    console.log(user);

    this.formLogin.reset();



    // this.servUsers.getUsers().subscribe({
    //   next: (users: User[]) => {
    //     users.find(user => user.email === userAutenticacao.email
    //       && user.senha === userAutenticacao.senha);
    //     this.listaUsers = users;
    //     console.log(this.listaUsers)

    //   },
    //   error: (error) => {
    //     console.log("Ocrorreu um erro:" + error)
    //   }
    // })
    // this.formLogin.reset();

  }

  get email(){
    return this.formLogin.get('email')!;
  }
  
  get senha(){
    return this.formLogin.get('senha')!;
  }
}

