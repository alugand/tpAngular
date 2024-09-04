import { Component } from '@angular/core';
import { PlancheComponent } from '../planche/planche.component';
import { Planche } from '../../models/planche';

@Component({
  selector: 'app-liseuse',
  standalone: true,
  imports: [PlancheComponent],
  templateUrl: './liseuse.component.html',
  styleUrl: './liseuse.component.css'
})
export class LiseuseComponent {
  plancheEnCours = new Planche(1,"https://imgs.xkcd.com/comics/lava_lakes.png", new Date(2024, 8, 2), "Lava Lakes");
  // La fonction réinitialise la propriété "numeroEnCours" à 1.
  first() {
    this.plancheEnCours = this.getPlancheNumero(1)
  }
  back() {
    if (this.plancheEnCours.numero>1) this.plancheEnCours = this.getPlancheNumero(this.plancheEnCours.numero-1)
  }
  random(){
    const n = Math.random()
    this.plancheEnCours = this.getPlancheNumero(Math.ceil(1 + n*2978))
  }
  next() {
    if (this.plancheEnCours.numero<2980) this.plancheEnCours = this.getPlancheNumero(this.plancheEnCours.numero+1)
  }
  last() {
    this.plancheEnCours = this.getPlancheNumero(2980)
  }
  getPlancheNumero(num: number): Planche {
    return new Planche(num) // les parametre du constructeur sont dans la classe planche.ts dans models
  }
}
