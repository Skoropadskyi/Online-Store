import { Component, OnInit } from '@angular/core';
import {products} from '@app/services/products-audio.service';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss']
})
export class AudioComponent implements OnInit {

  audio = products;

  constructor() { }

  ngOnInit(): void {
  }

}
