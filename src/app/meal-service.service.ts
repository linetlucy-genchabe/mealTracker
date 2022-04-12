import { Injectable } from '@angular/core';
import { meals } from './mealList';

@Injectable({
  providedIn: 'root'
})
export class MealServiceService {
  getMeals(){
    return meals;
  }

  constructor() { }
}
