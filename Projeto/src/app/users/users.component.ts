import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { ServusersService } from '../services/servusers.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  listaUsers : User[] =[]; 

  constructor(private servUsers: ServusersService) { }

  ngOnInit(): void {
    this.leUsers()
  } 

  leUsers(){
    this.servUsers.getUsers().subscribe((users:User[])=>{
        console.log(users)
      }
    ); 
  }

  // get email(){
  //  return 
  // }

}
