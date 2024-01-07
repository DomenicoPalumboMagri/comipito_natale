import { Component } from '@angular/core';

@Component({
  selector: 'app-secondo',
  templateUrl: './secondo.component.html',
  styleUrls: ['./secondo.component.css']
})
export class SecondoComponent {
 
  title = 'compito';
  CANTANTI = [
    {id: 1, name:'ghali'},
    {id: 2, name:'Tedua'},
    {id: 5, name:'Lazza'},
    {id: 3, name:'Plazza'},
    {id: 4, name:'Gemitaiz'}
  ];
}
