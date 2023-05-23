import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {
  //2
  constructor(private http:HttpClient) { }
  //1
  getNoticias(parametros:any):Observable<any>{//devuelve un objeto que es un observable
    const URL='https://newsapi.org/v2/top-headlines?country='+parametros.pais+'&category='+parametros.categoria+'&apiKey=f30a1ab39b3e477f99bbddfdeb703fe3'
    //3
    return this.http.get(URL)
  }
  /*
  1 cramos la variable con la URL
  2 Importamos el modulos para hacer las peticiones HTTP en el archivo app.module.ts
  3 creamos los parametros del contstructor
  4 retornamos la informacion con : 'return this.http.get(URL)'
  5 en app.component.ts injectamos el servicio
  */
 //++++++++++++++++++SEGUNDA PETICION PARA MODULO MEXICO
 getNoticiasMex():Observable<any>{//devuelve un objeto que es un observable
  const URL='https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=f30a1ab39b3e477f99bbddfdeb703fe3'
  //3
  return this.http.get(URL)
}
//+++++++++++TERCERA PETICION+++++++
getNoticiasTrump():Observable<any>{//devuelve un objeto que es un observable
  const URL='https://newsapi.org/v2/top-headlines?q=trump&apiKey=f30a1ab39b3e477f99bbddfdeb703fe3'
  //3
  return this.http.get(URL)
}

}
