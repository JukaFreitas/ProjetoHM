import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ServstoreService {
  user! : User; 

  constructor() {
   }

  getCurrentUser(){
return this.user; 

  }

  setCurrentUser(user : User){
    return this.user = user
    
  }
}
