import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  constructor(public modalRef: BsModalRef,
    private readonly formG: FormBuilder, private servUsers: ServusersService) { }




  ngOnInit(): void {
    this.formLogin = this.formG.group({
      email: [],
      senha: []

    });

  }
  userLogin() {
    const userAutenticacao: User = this.formLogin.value;
     this.servUsers.getUsers().subscribe((users: User[])=>{
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

}

