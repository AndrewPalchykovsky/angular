import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
    public name: string;
    public desc: string;
    public price: number;
    public imagePath: string;
    public ingredients: Ingredient[];

    constructor(name: string, desc: string, price: number, imagePath: string, ingredients: Ingredient[]) {
        this.name = name;
        this.desc = desc;
        this.price = price;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
}
