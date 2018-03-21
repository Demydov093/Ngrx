import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Car} from '../car.model';
import {AppState} from '../redux/app.state';
import {Store} from '@ngrx/store';
import {BuyCar, DeleteCar} from '../redux/cars.action';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  @Input() car: Car;
  @Output() deleteCar = new EventEmitter<Car>();


  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  onDelete() {
    this.store.dispatch(new DeleteCar(this.car));
  }
  onBuy() {
    this.store.dispatch(new BuyCar(this.car));
  }
}
