import { Component, OnInit } from '@angular/core';
import {products} from '@app/services/products-tel.service';

@Component({
  selector: 'app-telephone',
  templateUrl: './telephone.component.html',
  styleUrls: ['./telephone.component.scss']
})
export class TelephoneComponent implements OnInit {

  products = products;

  constructor() { }

  ngOnInit(): void {
  }

}
