import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-planche',
  standalone: true,
  imports: [],
  templateUrl: './planche.component.html',
  styleUrl: './planche.component.css'
})
export class PlancheComponent {
  @Input() numero: number = 1
}
