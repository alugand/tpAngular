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
}
