import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private storageKey = 'favorites';

  constructor() {}

  getFavorites(): string[] {
    const favorites = localStorage.getItem(this.storageKey);
    return favorites ? JSON.parse(favorites) : [];
  }

  addFavorite(id: string): void {
    const favorites = this.getFavorites();
    if (!favorites.includes(id)) {
      favorites.push(id);
      localStorage.setItem(this.storageKey, JSON.stringify(favorites));
    }
  }

  removeFavorite(id: string): void {
    let favorites = this.getFavorites();
    favorites = favorites.filter(favoriteId => favoriteId !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(favorites));
  }

  isFavorite(id: string): boolean {
    return this.getFavorites().includes(id);
  }
}
