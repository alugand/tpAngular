import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LiseuseComponent } from './components/liseuse/liseuse.component';
// on importe le composant sous le nom LiseuseComponent et on l'ajoute dans la metadata imports
@Component({ // les metadatas
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LiseuseComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tpAngular';
}
