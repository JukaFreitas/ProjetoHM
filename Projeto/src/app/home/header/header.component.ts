import { Component, OnInit } from '@angular/core';
import { subMenuAcessorios } from 'src/app/models/menus/subMenuAcessorios';
import { subMenuCrianca } from 'src/app/models/menus/subMenuCrianca';
import { subMenuHomem } from 'src/app/models/menus/subMenuHomem';
import { subMenuMulher } from 'src/app/models/menus/subMenuMulher';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  opcoesMenuHomem : string[] = subMenuHomem;
  opcoesMenuMulher : string[] = subMenuMulher; 
  opcoesMenuCrianca :string[] = subMenuCrianca;   
  opcoesMenuAcessorios :string[] = subMenuAcessorios; 
  mulher: string = "Mulher"; 
  homem:string="Homem";
  crianca:string="Criança"
  acessorios:string="Acessórios";

  constructor() { }

  ngOnInit(): void {
  }

}
