import { Component, OnInit } from '@angular/core';
import {products} from '@app/services/products-tr.service';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.scss']
})
export class TransportComponent implements OnInit {

  transport = products;

  constructor() { }

  ngOnInit(): void {
  }

}
