import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listado-noticias',
  templateUrl: './listado-noticias.component.html',
  styleUrls: ['./listado-noticias.component.css']
})
export class ListadoNoticiasComponent {
  //este @Input recibe la informacion del componente padre
  @Input() listNoticias:any

}
