import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ServstoreService {
  user!: User ;
  //https://www.querythreads.com/how-to-update-a-component-without-refreshing-full-page-angular/

  userComlogin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  userName: BehaviorSubject<string> = new BehaviorSubject<string>('');
  constructor() {
  }

  getCurrentUser() {
    return this.user;

  }



  setCurrentUser(user: User) {
    this.user = user;
    this.userName.next((this.user.nome)!);

    this.userComlogin.next(true);

  }

  getUserComLogin() {
    return this.userComlogin;
  }

  removerCurrentUser(){
    this.userComlogin.next(false);
    this.userName.next('');
    this.user = {}; 
  
  }



}
