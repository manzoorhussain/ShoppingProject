import { Component, OnInit } from '@angular/core';
import {Recipes} from '../recipes/recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipes[] = [
    new Recipes('A Test Recipe1', 'This is simple test1', 'http://mruanova.com/img/1.jpg'),
    new Recipes('A Test Recipe2', 'This is simple test2', 'http://mruanova.com/img/1.jpg'),
    new Recipes('A Test Recipe3', 'This is simple test3', 'http://mruanova.com/img/1.jpg'),
    new Recipes('A Test Recipe4', 'This is simple test4', 'http://mruanova.com/img/1.jpg')

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
