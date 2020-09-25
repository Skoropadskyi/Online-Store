import { Component, OnInit } from '@angular/core';
import {products} from '@app/services/products-watch.service';

@Component({
  selector: 'app-smart-watch',
  templateUrl: './smart-watch.component.html',
  styleUrls: ['./smart-watch.component.scss']
})
export class SmartWatchComponent implements OnInit {

  watch = products;

  constructor() { }

  ngOnInit(): void {
  }

}
