import { Component } from '@angular/core';
import { PlancheComponent } from '../planche/planche.component';

@Component({
  selector: 'app-liseuse',
  standalone: true,
  imports: [PlancheComponent],
  templateUrl: './liseuse.component.html',
  styleUrl: './liseuse.component.css'
})
export class LiseuseComponent {
  numeroEnCours: number = 1
  // La fonction réinitialise la propriété "numeroEnCours" à 1.
  first() {
    this.numeroEnCours = 1
  }
  back() {
    if (this.numeroEnCours>1) this.numeroEnCours--
  }
  random(){
    const n = Math.random()
    this.numeroEnCours = Math.ceil(1 + n*2978)
  }
  next() {
    if (this.numeroEnCours<2980) this.numeroEnCours++
  }
  last() {
    this.numeroEnCours = 2980
  }
}
