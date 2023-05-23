import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//2 para la conexion
import { HttpClientModule } from '@angular/common/http';
//componentes
import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListadoNoticiasComponent } from './components/listado-noticias/listado-noticias.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { AppRoutingModule } from './app-routing.module';
import { NoticiaPaisComponent } from './components/noticia-pais/noticia-pais.component';
import { RouterModule } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NoticiasMexicoComponent } from './noticias-mexico/noticias-mexico.component';
import { NoticiasTrumpComponent } from './noticias-trump/noticias-trump.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListadoNoticiasComponent,
    NavbarComponent,
    SpinnerComponent,
    NoticiaPaisComponent,
    HomeComponentComponent,
    NoticiasMexicoComponent,
    NoticiasTrumpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //2 para la conexion
    HttpClientModule,
    AppRoutingModule,
    RouterModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
