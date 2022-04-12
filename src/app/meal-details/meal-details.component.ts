import { Component,Input, OnInit , Output, EventEmitter} from '@angular/core';
import { Meal } from '../meal';
@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.component.html',
  styleUrls: ['./meal-details.component.css']
})
export class MealDetailsComponent implements OnInit {
  @Input() meal!:Meal
  @Output() isComplete = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

}
