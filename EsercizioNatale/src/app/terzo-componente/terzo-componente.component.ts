import { Component } from '@angular/core';

@Component({
  selector: 'app-terzo-componente',
  templateUrl: './terzo-componente.component.html',
  styleUrls: ['./terzo-componente.component.css']
})
export class TerzoComponenteComponent {
  
  title = 'compito';
  CANTANTI = [
    {id: 2, name:'Elodi:', Album:'Tutta Colpa Mia,Un*Altra Vita,Ok.Respira'},
    {id: 5, name:'Ultimo:', Album:'Alba,Pianeti,Solo,Colpa Delle Favole'},
    {id: 3, name:'Arisa:', Album:'Amami, Ero Romantica, Se Vedo Te,Guardando Il Cielo'},
    {id: 4, name:'Annalisa',  Album:'Nuda, Nali, Splendente, Bye Bye, Mentre Tutto Cambia'}
  ];
}
