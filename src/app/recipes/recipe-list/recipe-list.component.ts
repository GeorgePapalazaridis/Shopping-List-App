import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  // the syntax below is exactly the same with this one --> recipes:Array<Recipe> = [];
  recipes: Recipe[] = [
    new Recipe(
      'Man Pleasing Chicken', 
      'Making this flavorful recipe only with a few steps.', 
      'https://live.staticflickr.com/65535/49483629426_e752f6138a_c.jpg'
    ),
    new Recipe(
      'Man Pleasing Chicken', 
      'Making this flavorful recipe only with a few steps.', 
      'https://live.staticflickr.com/65535/49483629426_e752f6138a_c.jpg'
    ),
    new Recipe(
      'Man Pleasing Chicken', 
      'Making this flavorful recipe only with a few steps.', 
      'https://live.staticflickr.com/65535/49483629426_e752f6138a_c.jpg'
    )
  ];
  

  constructor(){}
}
 