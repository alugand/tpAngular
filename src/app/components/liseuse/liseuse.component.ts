import { Component, OnInit } from '@angular/core';
import { PlancheComponent } from '../planche/planche.component';
import { Planche } from '../../models/planche';
import { XkcdService } from '../../services/xkcd.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-liseuse',
  standalone: true,
  imports: [PlancheComponent, FormsModule],
  templateUrl: './liseuse.component.html',
  styleUrl: './liseuse.component.css'
})
export class LiseuseComponent implements OnInit{
  constructor(private napi: XkcdService, private route: ActivatedRoute, private router: Router) { }
  plancheEnCours = new Planche(1, "https://imgs.xkcd.com/comics/lava_lakes.png", new Date(2024, 8, 2), "Lava Lakes");
  nombre: number = 2980
  ngOnInit() {
    const numero = this.route.snapshot.params['numero']
    this.getPlancheNumero(numero)
  }
  // La fonction réinitialise la propriété "numeroEnCours" à 1.
  first() {
    this.getPlancheNumero(1)
  }
  back() {
    if (this.plancheEnCours.numero > 1) this.getPlancheNumero(this.plancheEnCours.numero - 1)
  }
  random() {
    const n = Math.random()
    this.getPlancheNumero(Math.ceil(1 + n * 2978))
  }
  next() {
    if (this.plancheEnCours.numero < 2980) this.getPlancheNumero(this.plancheEnCours.numero + 1)
  }
  last() {
    this.getPlancheNumero(2980)
  }
  getPlancheNumero(num: number): void { // changement de cette méthode car elle ne peut plus renvoyer de Planche, on ne peut pas mettre return reponse dans le next ca va pas marcher
    // ducoup on va faire ici la modification de plancheEnCours et mettre void en type de retour de la méthode
    this.napi.getPlancheNumero(num).subscribe({
      next: (reponse) => {
        console.log(reponse) // dans l'onglet console de l'inspecteur on voit l'objet retourner par la méthode getPlancheNumero du service
        this.plancheEnCours = reponse 
        this.router.navigate(['/liseuse',reponse.numero])
      },
      error: (err) => console.log(err),
      complete: ()=> console.log('Requete terminée')
    })
  }
  changerPlanche(){
    if (this.nombre < 2981 && this.nombre>-1) {
      console.log('ok')
      this.getPlancheNumero(this.nombre)
    }
  }
}
