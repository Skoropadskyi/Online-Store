import { Component, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-main-layout',
  templateUrl: 'main-layout.component.html',
  styleUrls: ['main-layout.component.scss']
})
export class MainLayoutComponent {
  tiles: Tile[] = [
    {text: 'One', cols: 4, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 3, color: 'lightgreen'},
    {text: 'Three', cols: 2, rows: 3, color: 'lightpink'},
    {text: 'Four', cols: 1, rows: 3, color: '#DDBDF1'},
  ];

}
