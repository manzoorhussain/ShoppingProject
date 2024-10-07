import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../shared/services/DataSharingService';
import { Recipes } from '../recipes/recipes.model';

@Component({
  selector: 'add-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  formData = {
    name: '',
    details: '',
  };

  selectedFile: File | null = null;
  constructor(private recipesDataSharingService: DataSharingService) { }

  ngOnInit(): void {
  }

  // Handle file selection
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      console.log('File selected:', this.selectedFile.name);
    }
  }

  // Handle form submission
  onSubmit() {
    if (this.selectedFile) {
    
this.recipesDataSharingService.addRecipes(new Recipes(this.formData.name,this.formData.details,this.selectedFile.name));
    } else {
      alert('Please select a file.');
    }
  }

}
