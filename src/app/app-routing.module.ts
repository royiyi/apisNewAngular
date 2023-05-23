import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NoticiaPaisComponent } from './components/noticia-pais/noticia-pais.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NoticiasMexicoComponent } from './noticias-mexico/noticias-mexico.component';
import { NoticiasTrumpComponent } from './noticias-trump/noticias-trump.component';


const routes: Routes = [
  { path: '', component:  HomeComponentComponent},
  { path: 'noticiaMexico', component: NoticiasMexicoComponent },
  { path: 'noticiaTrump', component: NoticiasTrumpComponent }
  // { path: 'contact', component: ContactPageComponent },
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
  ]
})
export class AppRoutingModule { }
