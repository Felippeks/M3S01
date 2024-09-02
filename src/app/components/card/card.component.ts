import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() car: any;

  constructor(private router: Router) {}

  verMais() {
    this.router.navigate(['/details', this.car.id]);
  }
}