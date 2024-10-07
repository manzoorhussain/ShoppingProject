import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Recipes } from 'src/app/recipes/recipes.model';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  // Create a BehaviorSubject to hold the shared data
  private recipesDataSource = new BehaviorSubject<Recipes>(null);
  
  // Observable that other components can subscribe to
  currentData = this.recipesDataSource.asObservable();

  // Function to update the data
  addRecipes(newData: Recipes) {
    this.recipesDataSource.next(newData);
  }
}