import { Component, OnInit } from '@angular/core';
import { NoticiaService } from '../services/noticia.service';

@Component({
  selector: 'app-noticias-trump',
  templateUrl: './noticias-trump.component.html',
  styleUrls: ['./noticias-trump.component.css']
})
export class NoticiasTrumpComponent implements OnInit{

  listNoticias:any[]=[]

  
  constructor(private _noticiaService: NoticiaService){
    
  }

  ngOnInit(): void {
    this.buscarNoticias()
  }

  
  buscarNoticias(){
    this._noticiaService.getNoticiasTrump().subscribe(data=>{console.log(data)
      this.listNoticias = data.articles
    })
  }

}
