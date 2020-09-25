import { Component, OnInit } from '@angular/core';
import {products} from '@app/services/products-game.service';

@Component({
  selector: 'app-gaming',
  templateUrl: './gaming.component.html',
  styleUrls: ['./gaming.component.scss']
})
export class GamingComponent implements OnInit {

  gaming = products;

  constructor() { }

  ngOnInit(): void {
  }

}
