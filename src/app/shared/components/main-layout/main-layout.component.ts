import { Component } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
}

@Component({
  selector: 'app-main-layout',
  templateUrl: 'main-layout.component.html',
  styleUrls: ['main-layout.component.scss']
})
export class MainLayoutComponent {
  header: Tile[] = [
    {cols: 12, rows: 1, color: 'lightblue'},
  ];
  sidebar: Tile[] = [
    {cols: 3, rows: 9, color: 'lightgreen'},
];
  content: Tile[] = [
    {cols: 6, rows: 9, color: 'lightpink'},
  ];
  sidebarright: Tile[] = [
    {cols: 3, rows: 9, color: '#DDBDF1'},
  ];
}
