import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../services/cars.service';
import { CardComponent } from "../../components/card/card.component";
import { FavoritesService } from '../../services/favorites.service';
import { SearchComponent } from "../../components/search/search.component";

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [CardComponent, SearchComponent],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.css'
})
export class ListingComponent implements OnInit {
  cars: any[] = [];
  filteredCars: any[] = [];

  constructor(
    private carsService: CarsService,
    private favoritesService: FavoritesService
  ) {}

  ngOnInit(): void {
    this.carsService.listAll().subscribe(data => {
      this.cars = data.map(car => ({
        ...car,
        isFavorite: this.favoritesService.isFavorite(car.id)
      }));
      this.filteredCars = this.cars;
    });
  }

  onSearch(term: string): void {
    this.filteredCars = this.cars.filter(car =>
      car.name.toLowerCase().includes(term.toLowerCase())
    );
  }
}