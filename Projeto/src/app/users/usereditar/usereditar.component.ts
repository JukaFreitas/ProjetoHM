import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-usereditar',
  templateUrl: './usereditar.component.html',
  styleUrls: ['./usereditar.component.css']
})
export class UsereditarComponent implements OnInit {

  formEditar!: FormGroup;
  constructor(public modalRef: BsModalRef) { }

  ngOnInit(): void {
    this.formEditar = new FormGroup({
      email: new FormControl('', [Validators.required,
      Validators.pattern('[A-Za-zÀ-ÿ]{1,}[@][A-Za-zÀ-ÿ]{1,}[.][A-Za-zÀ-ÿ]{2,}')]),
      senha: new FormControl('', Validators.required)
    });

  }

  atualizarUser(){

  }
}
