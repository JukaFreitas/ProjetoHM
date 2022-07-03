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

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  listaUsers: User[] = [];

 
  constructor(private router: Router, private servUsers: ServusersService, 
    private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  leUsers() {
    this.servUsers.getUsers().subscribe((users: User[]) => {
      console.log(users)
    }
    );


  }
}