import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { User } from 'src/app/models/user';
import { ServstoreService } from 'src/app/services/servstore.service';
import { ServusersService } from 'src/app/services/servusers.service';
import { Wishlist } from '../../models/wishlist';

@Component({
  selector: 'app-usereditar',
  templateUrl: './usereditar.component.html',
  styleUrls: ['./usereditar.component.css']
})
export class UsereditarComponent implements OnInit {

  formEditar!: FormGroup;
  constructor(private router: Router, private servUsers: ServusersService, public modalRef: BsModalRef, private servStore: ServstoreService) { }
user!: User;
userInserir!:User; 
  ngOnInit(): void {
   this.user= this.servStore.getCurrentUser();
   console.log(this.user);

    this.formEditar = new FormGroup({
      nome: new FormControl(this.user.nome), 
      email: new FormControl(this.user.email, [Validators.required,
      Validators.pattern('[A-Za-zÀ-ÿ]{1,}[@][A-Za-zÀ-ÿ]{1,}[.][A-Za-zÀ-ÿ]{2,}')]),
      senha: new FormControl(this.user.senha, Validators.required), 
      morada: new FormControl(this.user.morada),
      codigo_postal : new FormControl(this.user.codigo_postal), 
      pais: new FormControl(this.user.pais), 
 

    });

  }

  atualizarUser(){
    
  this.userInserir = this.formEditar.value; 
  this.userInserir.id = this.user.id; 
  this.userInserir.wishlist= this.user.wishlist; 
  this. userInserir.tipo= this.user.tipo; 
  
console.log(this.userInserir)
  this.servUsers.putUser(Number(this.userInserir.id),this.userInserir).subscribe((user:User)=>{
   user = this.userInserir; 
   user.wishlist = this.userInserir.wishlist;
   user.tipo = this.userInserir.tipo; 
    this.formEditar.reset; 
    this.modalRef.hide(); 
    this.servStore.setCurrentUser(user)
    this.router.navigate(['/home']);

  }); 

  }
}
