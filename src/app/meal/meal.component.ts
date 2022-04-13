import { Component,Input, Output,EventEmitter, OnInit } from '@angular/core';
import { Meal } from '../meal';
import { MealServiceService } from '../meal-service.service';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {
   meal:Meal[]
   
  //  =[ new Meal(1,"Chicken",239,"Bought from Chicken inn"),
  //   new Meal(2,"Pizza",266,"Bought from Pizza inn")
  // ];


  // addNewMeal(meals:any){
  //   let mealLength = this.meal.length;
  //   meals.id = mealLength+1;
    
  //   this.meal.push(meals)
  // }

  @Input()
  inputMealList: Meal[] = [];
  @Output()    
  outputDetails = new EventEmitter();
  addNewMeal(meals:any){
  let mealLength = this.meal.length;
  meals.id = mealLength+1;     
  this.meal.push(meals)
}

viewHighFoods(){

}
viewLowFoods(){

}
editMeal(meals:any){
  this.outputDetails.emit(meals)    
}
deleteMeal(meals:any){
  this.meal.splice(meals,1)
}
// showMealDetailToEdit($event){
//   this.
// }
resetSelection(){
  this.meal!=null;
}
  constructor(mealService:MealServiceService) { 
    this.meal=mealService.getMeals();

  }

  ngOnInit(): void {
  }

}
