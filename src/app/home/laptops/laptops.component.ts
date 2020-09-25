import { Component, OnInit } from '@angular/core';
import {products} from '@app/services/products-lap.service';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.scss']
})
export class LaptopsComponent implements OnInit {

  laptops = products;

  constructor() { }

  ngOnInit(): void {
  }

}
