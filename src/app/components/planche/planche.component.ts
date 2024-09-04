import { Component, Input } from '@angular/core';
import { Planche } from '../../models/planche';

@Component({
  selector: 'app-planche',
  standalone: true,
  imports: [],
  templateUrl: './planche.component.html',
  styleUrl: './planche.component.css'
})
export class PlancheComponent {
  @Input() planche = new Planche()
}
