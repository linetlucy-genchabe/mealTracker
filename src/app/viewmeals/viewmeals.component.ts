import { Component, OnInit } from '@angular/core';
import { meals } from '../mealList';

@Component({
  selector: 'app-viewmeals',
  templateUrl: './viewmeals.component.html',
  styleUrls: ['./viewmeals.component.css']
})
export class ViewmealsComponent implements OnInit {
  viewAllFoods(){

    // this.allFoods=meals;
    // this.addMeal.emit(this.newMeal);
    // this.newMeal=new Meal (0,"",0,"")
    
  }
  viewHighFoods(){

  }
  viewLowFoods(){

  }

  constructor() { }

  ngOnInit(): void {
  }

}
