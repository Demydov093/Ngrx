import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';


import { AppComponent } from './app.component';
import { CarsFormComponent } from './cars-form/cars-form.component';
import { CarsComponent } from './cars/cars.component';

import { carsReducer } from './redux/cars.reducer';



@NgModule({
  declarations: [
    AppComponent,
    CarsFormComponent,
    CarsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ carPage: carsReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
