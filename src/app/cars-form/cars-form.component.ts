import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Car} from '../car.model';
import moment = require('moment');
import {AppState} from '../redux/app.state';
import {Store} from '@ngrx/store';
import {AddCar} from "../redux/cars.action";

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.css']
})
export class CarsFormComponent implements OnInit {

  private id: number = 2;

  carName: string = '';
  carModel: string = '';

  // @Output() addCar = new EventEmitter<Car>();
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }
  onAdd() {
    if (this.carName === '' || this.carModel === '') { return; }

    this.id = ++this.id;

    const car = new Car(
      this.carName,
      moment().format('DD.MM.YY'),
      this.carModel,
      false,
      this.id
    );

    // this.addCar.emit(car);
    this.store.dispatch(new AddCar(car));

    this.carModel = '';
    this.carName = '';
  }
  onLoad() {

  }
}
