import { Component, OnInit } from '@angular/core';
import { Firs } from './firs.enum';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss'],
})
export class FirstComponent implements OnInit {
  name = 'First Component';
  description = 'My First Component for training';
  price = 0;
  // category: enum (Создайте enum с несколькими категориями) https://www.typescriptlang.org/docs/handbook/enums.html
  isAvailable: boolean;

  constructor() {}

  ngOnInit() {
    this.isAvailable = this.price === Firs.free ? true : false;
  }
}
