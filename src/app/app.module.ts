import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MealComponent } from './meal/meal.component';
import { MealDetailsComponent } from './meal-details/meal-details.component';
import { MealFormComponent } from './meal-form/meal-form.component';
import { MealServiceService } from './meal-service.service';
import { ViewmealsComponent } from './viewmeals/viewmeals.component';

@NgModule({
  declarations: [
    AppComponent,
    MealComponent,
    MealDetailsComponent,
    MealFormComponent,
    ViewmealsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [MealServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
