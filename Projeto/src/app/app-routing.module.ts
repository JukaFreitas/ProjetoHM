import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './users/user/user.component';
import { UserregistoComponent } from './users/userregisto/userregisto.component';
import { HomepagComponent } from './home/homepag/homepag.component';
import { ProdutoComponent } from './produtos/produto/produto.component';
import { PaginaprodutosComponent } from './produtos/paginaprodutos/paginaprodutos.component';


const routes: Routes = [
  {path:'', component: HomepagComponent}, 
  {path:'home', component: HomepagComponent},
  {path: 'user', component: UserComponent},
  {path:'userregisto', component: UserregistoComponent},
  {path : 'produto/:id', component: ProdutoComponent},
  {path:'paginaProdutos/:genero/:tipoProduto', component: PaginaprodutosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
