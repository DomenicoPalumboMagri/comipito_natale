import { Component } from '@angular/core';

@Component({
  selector: 'app-secondo',
  templateUrl: './secondo.component.html',
  styleUrls: ['./secondo.component.css']
})
export class SecondoComponent {
 
  title = 'compito';
  CANTANTI = [
    {id: 1, name:'ghali:', Album:'Album, Lunga Vita a Sto, DNA, Sensazione Ultra, PIZZA KEBAB Vol.1'},
    {id: 2, name:'Tedua:', Album:'Orange County California, Mowgli, Vita Vera'},
    {id: 5, name:'Lazza:', Album:'Zzala, Re Mida, J, SIRIO, '},
    {id: 3, name:'Plaza:', Album:'20, PLAZZA, Nato Per Questo'},
    {id: 4, name:'Gem:    ', Album:'Nonostante Tutto, QVC9, QVC8, Scatola Nera'}
  ];
}
