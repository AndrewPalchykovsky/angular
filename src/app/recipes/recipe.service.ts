import {Injectable, EventEmitter} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private slService: ShoppingListService) {
  }

  private recipes: Recipe[] = [
    new Recipe(
      'ПИЦЦА ТОНИ ПЕППЕРОНИ',
      'Пицца на пикантно-остром соусе, микс сыров, салями, сладкий болгарский перец, лук, специи.',
      162,
      'https://pizzburg.com.ua/image/cache/catalog/УЖАТЫЕ%20ПИЦЦЫ/1539163947223-default-1920x1080.jpg',
      [
        new Ingredient('Салями', 4),
        new Ingredient('Лук', 2)
      ]
    ),
    new Recipe(
      'ПИЦЦА СЫРНЫЙ ТОНИ',
      'Соус сливочный, сыр моцарелла, сыр дор блю, сыр пармезан, сыр твердый, салями, помидоры, специи.',
      182,
      'https://pizzburg.com.ua/image/cache/catalog/УЖАТЫЕ%20ПИЦЦЫ/1539163818252-default-1920x1080.jpg',
      [
        new Ingredient('Сыр дор блю', 4),
        new Ingredient('Салями', 1)
      ]
    )

  ];

  getRecepis() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipeToSl(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}
