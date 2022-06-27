import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ServusersService } from 'src/app/services/servusers.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-userregisto',
  templateUrl: './userregisto.component.html',
  styleUrls: ['./userregisto.component.css']
})
export class UserregistoComponent implements OnInit {

  formRegisto! : FormGroup;
 
  constructor(private servUsers: ServusersService,private rotaActiva: ActivatedRoute,  private localizacao: Location) { }

  ngOnInit(): void {
    this.formRegisto = new FormGroup({
      nome: new FormControl('',[Validators.required,Validators.minLength(3)]),
      email: new FormControl('',[Validators.required,Validators.pattern('[A-Za-zÀ-ÿ]{1,}[@][A-Za-zÀ-ÿ]{1,}[.][A-Za-zÀ-ÿ]{2,}')]),
      senha: new FormControl('', [Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$')]),
      morada: new FormControl(''), 
      codigo_postal: new FormControl(''), 
      pais: new FormControl('')
        });
  }

  registoUser(){
    let user : User = this.formRegisto.value;
    this.servUsers.postUser(user).subscribe(
      (user : User) => {
        console.log(user);
        this.formRegisto.reset();
   
      }
    ) 


  }


  voltarAtras(){
    this.localizacao.back();
  }

  get nome(){
    return this.formRegisto.get('nome')!;
  }

  get senha(){
    return this.formRegisto.get('senha')!;
  }

  get email(){
    return this.formRegisto.get('email')!;
  }

}
