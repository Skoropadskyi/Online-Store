import { Component, OnInit } from '@angular/core';

interface Car {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

  selectedCar: string;

  cars: Car[] = [
    {value: 'volvo', viewValue: 'Volvo'},
    {value: 'bmw', viewValue: 'BMW'},
    {value: 'mercedes', viewValue: 'Mercedes'},
    {value: 'audi', viewValue: 'Audi'},
    {value: 'chevrolet', viewValue: 'Chevrolet'},
    {value: 'ford', viewValue: 'Ford'},
    {value: 'mazda', viewValue: 'Mazda'},
    {value: 'toyota', viewValue: 'Toyota'},
    {value: 'ваз', viewValue: 'ВАЗ'}
  ];
}
