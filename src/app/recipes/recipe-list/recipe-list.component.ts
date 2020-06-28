import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    {
      name: 'ПИЦЦА ТОНИ ПЕППЕРОНИ',
      desc: 'Пицца на пикантно-остром соусе, микс сыров, салями, сладкий болгарский перец, лук, специи.',
      price: 162,
      imagePath: 'https://pizzburg.com.ua/image/cache/catalog/УЖАТЫЕ%20ПИЦЦЫ/1539163947223-default-1920x1080.jpg'
    },
    {
      name: 'ПИЦЦА СЫРНЫЙ ТОНИ',
      desc: 'Соус сливочный, сыр моцарелла, сыр дор блю, сыр пармезан, сыр твердый, салями, помидоры, специи.',
      price: 182,
      imagePath: 'https://pizzburg.com.ua/image/cache/catalog/УЖАТЫЕ%20ПИЦЦЫ/1539163818252-default-1920x1080.jpg'
    }

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
