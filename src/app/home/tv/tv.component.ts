import { Component, OnInit } from '@angular/core';
import {products} from '@app/services/products-tv.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {

  tv = products;

  constructor() { }

  ngOnInit(): void {
  }

}
