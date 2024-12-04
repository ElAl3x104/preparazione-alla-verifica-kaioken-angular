import { Component } from '@angular/core';
import { MacchinaComponent } from '../macchina/macchina.component';

@Component({
  selector: 'app-container',
  imports: [MacchinaComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  namesCar: string[]; //Creiamo il nostro vettore di stringhe 
  constructor() { 
     this.namesCar = ['Ruspa', 'Autocarro', 'Gru', 'Grax', 'Bonux', 'Grazix', 'Bottax', 'Mattox', 'Mattax', 'Moustafax',]; //Riempiamo il vettore
  }
  ngOnInit() {
  }
}
