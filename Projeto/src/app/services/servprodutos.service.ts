import {HttpClient, HttpErrorResponse} from'@angular/common/http'; 
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Produto } from '../models/produto';


@Injectable({
  providedIn: 'root'
})
export class ServprodutosService {

  private urlAPI = "http://localhost:3000/produtos"; 

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

  getProdutos(){
    return this.http.get<Produto[]>(this.urlAPI); 
  }

  getProduto(id : number){
    return this.http.get<Produto>(`${this.urlAPI}/${id}`); 
  }

  filtraProduto(filtroProduto:string){
    return this.http.get<Produto>(`${this.urlAPI}?title_like=${filtroProduto}`); 

  }

  postProduto(infoProduto:Produto){
    return this.http.post<Produto>(this.urlAPI,infoProduto); 

  }

  putProduto(id:number, infoProduto: Produto){
    return this.http.put<Produto>(`${this.urlAPI}/${id}`, infoProduto); 

  }

  deleteProduto(id:number){
    return this.http.delete<Produto>(`${this.urlAPI}/${id}`).
    pipe(
      catchError(this.processaErro)); 

  }

  
  getProdutosPage(initialRecord : number, numberRecords : number) {
    return this.http.get<Produto[]>(`${this.urlAPI}?_start=${initialRecord}&_limit=${numberRecords}`, { observe: 'response' });
  }

}
