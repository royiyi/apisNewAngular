import { Component } from '@angular/core';
import { NoticiaService } from '../services/noticia.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {

  //para mostrar en los card las noticias obtenidas del api
  listNoticias:any[]=[]
  //para el spinner
  loading = false;


  title = 'noticias';

  //para injectar el servicio
  //cuando ponemos nuevos modulos sale el error y hay que reiniciarlo
  constructor(private _noticiaService: NoticiaService){
    
  }


  buscarNoticias(parametros:any){
    /*
    Apenas se ejecuta este metodo buscar noticia
    */
   this.loading=true
    //limpiamos con un array vacio
    this.listNoticias=[]

    // console.log('soy el padre')
    // console.log(parametros)
    this._noticiaService.getNoticias(parametros).subscribe(data=>{console.log(data)
      // y una ves que finaliza lo pongo como falso
      this.loading= false
      //Para los cards (debemos pasar este listado de noticias al componente hijo para que muestre las tarjetas)
      this.listNoticias = data.articles
    
    },error => {
      console.log(error)
      //si existe algun error pongo en false para que no se muestre ningun error
      this.loading=false
    })

  }

}
