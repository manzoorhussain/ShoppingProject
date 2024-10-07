import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from '../recipes/recipes.component';
import { AppComponent } from '../app.component';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';

const routes: Routes = [
  { path: '', component:AppComponent },   // Default route
  { path: 'recipes', component:RecipesComponent }, 
  { path: 'shopping-list', component:ShoppingListComponent },   // About route
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Use forRoot in the root routing module
  exports: [RouterModule]
})

export class AppRoutingModule { }
