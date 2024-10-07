import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  public addRecipeItems:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }


  addRecipeItem(){
    if(this.addRecipeItems==true){
      this.addRecipeItems=false;
    }else{
      this.addRecipeItems=true;
    }
    
  }

}
