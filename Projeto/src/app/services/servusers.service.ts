import {HttpClient, HttpErrorResponse} from'@angular/common/http'; 
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class ServusersService {
  private urlAPI ="http://localhost:3000/users"; 

  constructor(private http: HttpClient) { }

  private processaErro(erro: HttpErrorResponse){
    let mensagem="";
    if(erro.status===404){
      mensagem="Página inexistente"
    }else{
      mensagem="Ocorreu um erro inesperado"
    }

    const err = new Error(mensagem); 
    return throwError(()=>err); 
  }

  getUsers(){
    return this.http.get<User[]>(this.urlAPI); 
  }

  getUser(id : number){
    return this.http.get<User>(`${this.urlAPI}/${id}`); 
  }


  filtraUser(filtroUser:string){
    return this.http.get<User>(`${this.urlAPI}?title_like=${filtroUser}`); 

  }

  postUser(infoUser:User){
    return this.http.post<User>(this.urlAPI,infoUser); 

  }

  putUser(id:number, infoUser: User){
    return this.http.put<User>(`${this.urlAPI}/${id}`, infoUser); 

  }

  deleteUser(id:number){
    return this.http.delete<User>(`${this.urlAPI}/${id}`)
    .pipe(catchError(this.processaErro)); 

  }

}
