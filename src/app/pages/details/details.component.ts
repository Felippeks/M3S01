import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from '../../services/cars.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  car: any;

  constructor(private route: ActivatedRoute, private carsService: CarsService) { }

  ngOnInit(): void {
    const carId = this.route.snapshot.paramMap.get('id');
    if (carId) {
      this.carsService.getById(carId).subscribe(data => {
        this.car = data;
      });
    }
  }
}