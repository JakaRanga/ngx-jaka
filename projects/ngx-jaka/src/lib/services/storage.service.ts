import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  getFromStorage(key: string): string {
    return localStorage.getItem(key);
  }

  removeFromStorage(key: string): void {
    localStorage.removeItem(key);
  }

  clearStorage(): void {
    localStorage.clear();
  }

  setToStorage(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

}
