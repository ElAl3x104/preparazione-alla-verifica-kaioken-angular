import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-macchina',
  imports: [],
  templateUrl: './macchina.component.html',
  styleUrl: './macchina.component.css'
})
export class MacchinaComponent {
 @Input() TipoMacchina: string = "";
 namesPezzi: string[]; //Creiamo il nostro vettore di stringhe 
  constructor() { 
     this.namesPezzi = ['Bulloni', 'Viti', 'Ferro',]; //Riempiamo il vettore
  }
  ngOnInit() {
  }
}
