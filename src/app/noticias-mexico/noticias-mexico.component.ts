import { Component, OnInit } from '@angular/core';
import { NoticiaService } from '../services/noticia.service';

@Component({
  selector: 'app-noticias-mexico',
  templateUrl: './noticias-mexico.component.html',
  styleUrls: ['./noticias-mexico.component.css']
})
export class NoticiasMexicoComponent implements OnInit {
  listNoticias:any[]=[]
  

  constructor(private _noticiaService: NoticiaService){
    
  }
  ngOnInit(): void {
    
    this.buscarNoticias()
  }


  buscarNoticias(){
    this._noticiaService.getNoticiasMex().subscribe(data=>{console.log(data)
      this.listNoticias = data.articles
    })
    /*
    
    Apenas se ejecuta este metodo buscar noticia
    */
   /*
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
    })*/

  }



}
