import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalModule } from 'ngx-bootstrap/modal';
import { UserautenticacaoComponent } from './users/userautenticacao/userautenticacao.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserregistoComponent } from './users/userregisto/userregisto.component';
import { UserComponent } from './users/user/user.component';
import { HomepagComponent } from './home/homepag/homepag.component';
import { CarroselComponent } from './home/carrosel/carrosel.component';
import { CarouselConfig, CarouselModule } from 'ngx-bootstrap/carousel';
import { DestaquesComponent } from './home/destaques/destaques.component';
import { ProdutoComponent } from './produtos/produto/produto.component';
import { PaginaprodutosComponent } from './produtos/paginaprodutos/paginaprodutos.component';
import { CardComponent } from './card/card.component';
import { AdministradorComponent } from './users/administrador/administrador.component';
@NgModule({
  declarations: [
    AppComponent,
    UserautenticacaoComponent,
    UserComponent, 
    UserregistoComponent,
     HomepagComponent, 
     CarroselComponent, 
     DestaquesComponent, 
     ProdutoComponent, 
     PaginaprodutosComponent, 
     CardComponent , 
     AdministradorComponent
     
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    FontAwesomeModule, 
    FormsModule,
    ReactiveFormsModule, 
    CarouselModule
    
  ],
  providers: [ { provide: CarouselConfig, useValue: { interval: 3000, noPause: true, showIndicators: true }}],
  bootstrap: [AppComponent]
})
export class AppModule { }
