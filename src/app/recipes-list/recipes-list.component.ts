import { Component, OnInit } from '@angular/core';
import {Recipes} from '../recipes/recipes.model';
import { DataSharingService } from '../shared/services/DataSharingService';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  public addRecipeItems:boolean=false;

  recipes: Recipes[] = [
    new Recipes('Biryani1', 'Karachi Biryani1', 'http://mruanova.com/img/1.jpg'),
    new Recipes('Biryani2', 'Karachi Biryani2', 'http://mruanova.com/img/1.jpg'),
    new Recipes('Biryani3', 'Karachi Biryani3', 'http://mruanova.com/img/1.jpg'),
    new Recipes('Biryani4', 'Karachi Biryani4', 'http://mruanova.com/img/1.jpg')

  ];
  constructor(private recipesDataSharingService: DataSharingService) { }



  ngOnInit() {
    // Subscribe to the observable to receive new recipe data
    this.recipesDataSharingService.currentData.subscribe((newRecipe: Recipes | null) => {
      if (newRecipe) {
        this.recipes.push(newRecipe);
        console.log('New recipe added:', newRecipe);
      }
    });
    
  }

  
addRecipeItem(){
  if(this.addRecipeItems==true){
    this.addRecipeItems=false;
  }else{
    this.addRecipeItems=true;
  }
  
}

}
