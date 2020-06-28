import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    {
      name: 'Ветчина',
      amount: 5
    },
    {
      name: 'Сыр',
      amount: 7
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
