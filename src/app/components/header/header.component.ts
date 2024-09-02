import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  favoriteCount: number = 0;

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.updateFavoriteCount();
  }

  updateFavoriteCount(): void {
    this.favoriteCount = this.favoritesService.getFavorites().length;
  }
}