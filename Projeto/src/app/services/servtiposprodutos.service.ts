import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Tipoproduto } from '../models/tipoproduto';

@Injectable({
  providedIn: 'root'
})
export class ServtiposprodutosService {

  private urlAPI = "  http://localhost:3000/tipoProduto"

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

  getTiposProduto(){
    return this.http.get<Tipoproduto[]>(this.urlAPI); 
  }

  getTipoProduto(id : number){
    return this.http.get<Tipoproduto>(`${this.urlAPI}/${id}`); 
  }

  filtraTipoProduto(filtroTipoProduto:string){
    return this.http.get<Tipoproduto>(`${this.urlAPI}?title_like=${filtroTipoProduto}`); 

  }

  postTipoProduto(infoTipoProduto:Tipoproduto){
    return this.http.post<Tipoproduto>(this.urlAPI, infoTipoProduto); 

  }

  putTipoProduto(id:number, infoTipoProduto: Tipoproduto){
    return this.http.put<Tipoproduto>(`${this.urlAPI}/${id}`, infoTipoProduto); 

  }

  deleteTipoProduto(id:number){
    return this.http.delete<Tipoproduto>(`${this.urlAPI}/${id}`)
    .pipe(catchError(this.processaErro)); 

  }

}

