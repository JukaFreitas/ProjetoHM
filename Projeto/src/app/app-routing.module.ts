import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './users/user/user.component';
import { ProdutosgeralComponent } from './produtos/produtosgeral/produtosgeral.component';
import { UserregistoComponent } from './users/userregisto/userregisto.component';
import { HomepagComponent } from './home/homepag/homepag.component';


const routes: Routes = [
  {path:'', component: HomepagComponent}, 
  {path:'home', component: HomepagComponent},
  {path: 'user', component: UserComponent},
  {path:'userregisto', component: UserregistoComponent},
  {path: 'produtos', component: ProdutosgeralComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
