import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meal-form',
  templateUrl: './meal-form.component.html',
  styleUrls: ['./meal-form.component.css']
})
export class MealFormComponent implements OnInit {

  submitMeal(){
    // this.addMeal.emit
  }
  constructor() { }

  ngOnInit(): void {
  }

}
